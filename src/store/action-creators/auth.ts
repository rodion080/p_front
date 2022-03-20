import { ActionCreator, Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  // AuthAction,
  AuthTypes, AuthState,
} from '../type/auth';

export type AuthThunk = ThunkAction<
    void,
    AuthState,
    null,
    Action<string>
    >;

// eslint-disable-next-line import/prefer-default-export
export const fetchAuth: ActionCreator<AuthThunk> = (item) => (dispatch: Dispatch): Action => {
  try {
    return dispatch({
      type: AuthTypes.FETCH_AUTH_SUCCESS,
      payload: item,
    });
  } catch (e) {
    return dispatch({
      type: AuthTypes.FETCH_AUTH_ERROR,
      payload: 'Error yopt',
    });
  }
};

// eslint-disable-next-line import/prefer-default-export,max-len
// export const fetchAuth: AppThunk = async (dispatch: Dispatch<AuthAction>, state: AuthState) => {
//   try {
//     console.log(2);
//     console.log(state);
//     setTimeout(() => dispatch({
//       type: AuthTypes.FETCH_AUTH_SUCCESS,
//       payload: '#v#v#f#vfdäväfdvädfvädfäv',
//     }), 1000);
//   } catch (e) {
//     dispatch({
//       type: AuthTypes.FETCH_AUTH_ERROR,
//       payload: 'Error happened while main loading',
//     });
//   }
// };
