export enum LanguagesTypes {
    // eslint-disable-next-line no-unused-vars
    RU = 'RU',
    // eslint-disable-next-line no-unused-vars
    EN = 'EN',
    // eslint-disable-next-line no-unused-vars
    DE = 'DE',
}

export interface LangState {
    language: LanguagesTypes.RU | LanguagesTypes.EN | LanguagesTypes.DE ;
}

interface RuLangAction {
    type: LanguagesTypes.RU;
}

interface DeLangAction {
    type: LanguagesTypes.DE;
}

interface EnLangAction {
    type: LanguagesTypes.EN;
}

export type LangAction = RuLangAction | DeLangAction | EnLangAction
export type LangTypes = LanguagesTypes.RU | LanguagesTypes.EN | LanguagesTypes.DE
