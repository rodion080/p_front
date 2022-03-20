import { ModalTypes, LoginModalTypes, LoginModalState } from '../type/login';

const initilState: LoginModalState = {
  openRegister: false,
  openLogin: false,
};

// eslint-disable-next-line import/prefer-default-export,default-param-last,max-len
export const loginModalReducer = (state: LoginModalState = initilState, action: ModalTypes): LoginModalState => {
  switch (action.type) {
  case LoginModalTypes.CLOSE_ALL:
    return { openRegister: false, openLogin: false };
  case LoginModalTypes.OPEN_LOGIN:
    return { openRegister: false, openLogin: true };
  case LoginModalTypes.OPEN_REGISTER:
    return { openRegister: true, openLogin: false };
  default:
    return state;
  }
};
