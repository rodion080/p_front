import { createContext } from 'react';
import ru from '../locales/ru.json';

type LanguageContextProps = {
    langDict:object
}
export const LanguageContext = createContext<Partial<LanguageContextProps>>({ langDict: ru });
