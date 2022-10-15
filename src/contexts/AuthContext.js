import { createContext, useEffect, useReducer } from "react";
import { authAPI } from "../api/api";

const initialState = {
  username: null,
  success: false,
  sessionId: null,
  request_token: null,
};

const LOGIN_SUCCESS = "LOGIN SUCCESS";
const LOGOUT = "LOGOUT";
const SETSESSIONDATA = "SETSESSIONDATA";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        success: true,
        sessionId: action.payload.sessionId,
        request_token: action.payload.request_token,
      };
    case LOGOUT:
      return {
        ...state,
        username: null,
        sessionId: null,
      };
    case SETSESSIONDATA:
      const { username, sessionId } = action.payload;
      return {
        ...state,
        username,
        sessionId,
        success: true,
      };

    default:
      return state;
  }
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const username = window.localStorage.getItem("username");
        const sessionId = window.localStorage.getItem("movieSearcherSessionId");

        if (username && sessionId) {
          dispatch({
            type: SETSESSIONDATA,
            payload: { username, sessionId },
          });
        }
        if (!username && !sessionId) {
          dispatch({
            type: SETSESSIONDATA,
            payload: { username: null, sessionId: null },
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: SETSESSIONDATA,
          payload: {
            sessionId: null,
            username: null,
          },
        });
      }
    };
    initialize();
  }, []);

  const login = async (username, password, request_token, callback) => {
    await authAPI.login(username, password, request_token);
    const data = await authAPI.createSession(request_token);
    const sessionId = data.data.session_id;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { username, request_token, sessionId },
    });

    console.log(sessionId);
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("movieSearcherSessionId", sessionId);

    callback();
  };
  const logout = async (callback) => {
    const sessionId = window.localStorage.getItem("movieSearcherSessionId");
    await authAPI.logout(sessionId);
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("movieSearcherSessionId");
    dispatch({ type: LOGOUT });
    callback();
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
