import { AuthAction, AuthTypes, AuthState } from '../type/auth';

const initilState: AuthState = {
  isAuth: false,
  token: null,
  message: null,
};

// eslint-disable-next-line import/prefer-default-export,default-param-last
export const authReducer = (state: AuthState = initilState, action: AuthAction): AuthState => {
  switch (action.type) {
  case AuthTypes.FETCH_AUTH_SUCCESS:
    return { isAuth: true, token: action.payload, message: 'Success' };
  case AuthTypes.FETCH_AUTH_ERROR:
    return { isAuth: false, token: null, message: action.payload };
  default:
    return state;
  }
};
