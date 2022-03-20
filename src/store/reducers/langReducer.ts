import { LangAction, LanguagesTypes, LangState } from '../type/lang';

const initilState: LangState = {
  language: LanguagesTypes.RU,
};

// eslint-disable-next-line import/prefer-default-export,default-param-last
export const langReducer = (state: LangState = initilState, action: LangAction): LangState => {
  switch (action.type) {
  case LanguagesTypes.RU:
    return { language: LanguagesTypes.RU };
  case LanguagesTypes.DE:
    return { language: LanguagesTypes.DE };
  case LanguagesTypes.EN:
    return { language: LanguagesTypes.EN };
  default:
    return state;
  }
};
