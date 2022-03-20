import { LanguagesTypes } from '../store/type/lang';
import ru from '../locales/ru.json';
import de from '../locales/de.json';
import en from '../locales/en.json';

export const locales = {
  [LanguagesTypes.RU]: ru,
  [LanguagesTypes.DE]: de,
  [LanguagesTypes.EN]: en,
};
