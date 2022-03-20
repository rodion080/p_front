export enum LoginModalTypes {
    // eslint-disable-next-line no-unused-vars
    CLOSE_ALL = 'LOGIN_MODAL_CLOSE_ALL',
    // eslint-disable-next-line no-unused-vars
    OPEN_LOGIN = 'OPEN_LOGIN',
    // eslint-disable-next-line no-unused-vars
    OPEN_REGISTER = 'OPEN_REGISTER',
}

export interface LoginModalState {
    openRegister: boolean;
    openLogin: boolean;
}

export interface CloseAllModalAction {
    type: LoginModalTypes.CLOSE_ALL;
}

export interface OpenLoginModalAction {
    type: LoginModalTypes.OPEN_LOGIN;
}

export interface OpenRegisterModalAction {
    type: LoginModalTypes.OPEN_REGISTER;
}

export type ModalTypes = CloseAllModalAction| OpenLoginModalAction | OpenRegisterModalAction

//
// export type LangAction = RuLangAction | DeLangAction | EnLangAction
// export type LangTypes = LanguagesTypes.RU | LanguagesTypes.EN | LanguagesTypes.DE
