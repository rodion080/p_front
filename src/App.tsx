import React from 'react';
import './styles/style.scss';
import Navbar from './components/UI/navbar/Navbar';
import GMap from './components/Map/GMap';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
// import Modal from './components/UI/modal/Modal';
// import LinkButton from './components/UI/button/LinkButton';
// import Input from './components/UI/input/Input';
import { locales } from './utils';

import { LanguageContext } from './context';
import LogReg from './components/LogReg/LogReg';

const App = () => {
  const { isAuth, message, token } = useTypedSelector((state) => state.auth);
  const { main, error, loading } = useTypedSelector((state) => state.main);
  const { language } = useTypedSelector((state) => state.lang);

  const { setLang, openLogin, openRegister } = useActions();
  console.log(isAuth, message, token, openLogin, locales);

  const logRegOpen = () => {
    openRegister();
  };

  return (
    <LanguageContext.Provider
      value={{
        langDict: locales[language],
      }}
    >
      <div className="App">
        <div className="container">
          <div className="container__wrapper">
            <Navbar
              setLang={setLang}
              lang={language}
              logRegOpen={logRegOpen}
            />
          </div>
          <GMap
            main={main}
            error={error}
            loading={loading}
          />
          <LogReg />
        </div>
      </div>
    </LanguageContext.Provider>

  );
};
export default App;
