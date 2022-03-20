import React, { Context, useContext } from 'react';
import LinkButton from '../button/LinkButton';
import locImg from '../../../images/loc.png';
import en from '../../../images/en.jpg';
import de from '../../../images/de.jpg';
import ru from '../../../images/ru.jpg';
import { LangTypes, LanguagesTypes } from '../../../store/type/lang';
import { FSetLangType } from '../../../store/action-creators/lang';
import { LanguageContext } from '../../../context';

const Navbar = ({ lang, setLang, logRegOpen } :
                    {lang: LangTypes, setLang:FSetLangType, logRegOpen:()=>void }) => {
  const langSelect = (selectedLang: LangTypes) => {
    setLang(selectedLang);
  };

  const { langDict } : {langDict:Context} = useContext(LanguageContext);

  return (
    <nav className="nav">
      <ul className="nav__list-left">
        <li className="nav__item-right">
          <LinkButton image={locImg}>
            <span>Saint - Petersburg</span>
          </LinkButton>
        </li>
        <li>
          <LinkButton
            selected={lang === LanguagesTypes.RU}
            onClick={() => langSelect(LanguagesTypes.RU)}
            image={ru}>
            <span>RU</span>
          </LinkButton>
        </li>
        <li>
          <LinkButton
            selected={lang === LanguagesTypes.DE}
            onClick={() => langSelect(LanguagesTypes.DE)}
            image={de}>
            <span>DE</span>
          </LinkButton>
        </li>
        <li>
          <LinkButton
            selected={lang === LanguagesTypes.EN}
            onClick={() => langSelect(LanguagesTypes.EN)}
            image={en}>
            <span>EN</span>
          </LinkButton>
        </li>

      </ul>
      <ul className="nav__list-right">
        <li className="nav__item">
          <LinkButton
            onClick={logRegOpen}
          >
            <span>{langDict.login}</span>
          </LinkButton>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
