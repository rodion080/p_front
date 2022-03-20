import React, { Context, useContext } from 'react';
import Modal from '../UI/modal/Modal';
import Input from '../UI/input/Input';
import LinkButton from '../UI/button/LinkButton';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LanguageContext } from '../../context';

const LogReg = () => {
  const {
    openLogin: openLoginBool,
    openRegister: openRegisterBool,
  } = useTypedSelector((state) => state.loginModal);

  const { langDict } : {langDict:Context} = useContext(LanguageContext);
  const { openLogin, closeModal } = useActions();

  const closeModalWindow = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <div>
      <Modal
        onClick={(e) => closeModalWindow(e)}
        active={openRegisterBool}
      >
        {langDict.registerFormHead}
        <label>
          {langDict.emailForm}
          <br/>
          <Input
            placeholder={langDict.emailForm}
            type="text"
          />
        </label>
        <label >
          {langDict.pass}
          <br/>
          <Input
            placeholder={langDict.pass}
            type="password"
          />
        </label>
        <label >
          {langDict.confPass}
          <br/>
          <Input
            placeholder={langDict.confPass}
            type="password"
          />
        </label>

        <LinkButton>
          {langDict.regButton}
        </LinkButton>
        <span>{langDict.regQuestion}</span> <a onClick={openLogin}>{langDict.logInLinkName}</a>
      </Modal>

      <Modal
        onClick={(e) => closeModalWindow(e)}
        active={openLoginBool}
      >
        {langDict.loginFormHead}
        <label>
          {langDict.emailForm}
          <br/>
          <Input
            placeholder={langDict.emailForm}
            type="text"
          />
        </label>
        <label >
          {langDict.pass}
          <br/>
          <Input
            placeholder={langDict.pass}
            type="password"
          />
        </label>
        <LinkButton>
          {langDict.logInLinkName}
        </LinkButton>
      </Modal>
    </div>
  );
};

export default LogReg;
