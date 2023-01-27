import React, {
  createContext,
  useEffect,
  useReducer
} from 'react';
import jwtDecode from 'jwt-decode';
import SplashScreen from '../components/SplashScreen';
import axios from 'axios';
import API from '../utils/api';

const initialAuthState = {
  isAuthenticated: false,
  isInitialised: false,
   user: null,
  // user: {merchantId: 'c27053b8-7571-420c-9ad8-f5213b8b3248'}
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('access_token', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('access_token');
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated, user, menus } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
        menus
      };
    }
    case 'LOGIN': {
      const { user, menus } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
        menus
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
    case 'REGISTER': {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  login: () => Promise.resolve(),
  logout: () => { },
  register: () => Promise.resolve()
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async (email, password) => {
    const access_token = localStorage.getItem('access_token');

    try {
      var response = await axios.post('https://sso.siamtheatre.com/connect/userinfo',
      {}, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`,
          "Token_Type": "Bearer",
        }
      })

      const { sub } = response.data;

      var responseInfo = await axios.get(`${API.USER}/${sub}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`,
          "Token_Type": "Bearer",
        }
      });

      setSession(access_token);
      dispatch({
        type: 'LOGIN',
        payload: {
          user: {
            userId: sub,
            ...responseInfo.data,
          },
        }
      });
    } catch (err) {
      setSession(null);
      dispatch({ type: 'LOGOUT' });
    }
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (email, name, password) => {
    const response = await axios.post('/api/account/register', {
      email,
      name,
      password
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem('access_token', accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user
      }
    });
  };

  useEffect(() => {
    const initialise = async () => {
      try {
        const accessToken = window.localStorage.getItem('access_token');

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          var response = await axios.post('https://sso.siamtheatre.com/connect/userinfo',
          {}, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${accessToken}`,
              "Token_Type": "Bearer",
            }
          })
      
          const { sub } = response.data;
      
          var responseInfo = await axios.get(`${API.USER}/${sub}`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${accessToken}`,
              "Token_Type": "Bearer",
            }
          });
      
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated: true,
              user: {
                userId: sub,
                ...responseInfo.data,
              },
            }
          });
        } else {
          setSession(null);
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated: false,
              user: null,
            }
          });
        }
      } catch (err) {
        setSession(null);
        dispatch({
          type: 'INITIALISE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialise();
  }, []);

  if (!state.isInitialised) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;