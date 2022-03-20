import { combineReducers } from 'redux';
import { mainReducer } from './mainReducer';
import { authReducer } from './authReducer';
import { langReducer } from './langReducer';
import { loginModalReducer } from './loginModalReducer';

export const rootReducer = combineReducers({
  main: mainReducer,
  auth: authReducer,
  lang: langReducer,
  loginModal: loginModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>
