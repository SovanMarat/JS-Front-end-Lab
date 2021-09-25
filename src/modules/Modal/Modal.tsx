import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './Modal.scss';

export default function Modal() {
  const modalBox = document.createElement('div');
  document.body.append(modalBox);

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [nameBtnForm, setNameBtnForm] = useState('Sign In');
  const [nameSubBtn, setNameSubBtn] = useState('register?');
  const [titleForm, setTitleForm] = useState('Login');
  const [messageForm, setMessageForm] = useState('');

  useEffect(() => {
    if (isLogin) {
      setTitleForm('Login');
      setNameBtnForm('Ok');
      setNameSubBtn('Register now');
    } else {
      setTitleForm('Registration');
      setNameBtnForm('Register');
      setNameSubBtn('Enter login');
    }
  }, [isLogin]);

  useEffect(() => {
    inputEmail.current?.focus();
  }, [username]);

  useEffect(() => {
    inputPassword.current?.focus();
  }, [password]);

  const changeStateForm = () => setIsLogin(!isLogin);
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const change = (e: React.FormEvent<EventTarget>) => {
    setNameBtnForm('Register');
    getUserCurrent();
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    getUserCurrent();
    e.preventDefault();
  };

  const getUserCurrent = async () => {
    const URL = isLogin ? 'http://localhost:8000/auth/login' : 'http://localhost:8000/auth/registration';

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const json = await response.json();
      setMessageForm(json.username);
      json.message && setMessageForm(json.message);
      json.errors?.errors[0].msg && setMessageForm(json.errors.errors[0].msg);
      json.token && localStorage.setItem('currentToken', json.token);
      json.username && localStorage.setItem('currentUser', json.username);
    } catch (error) {
      console.log(error);
    }
  };

  return ReactDOM.createPortal(
    <div className='wrapper-modal'>
      <div className='wrapper-modal-form'>
        <div className='modal'>
          <div className='modal-header'>
            <NavLink to='/'>
              <div className='modal-header__btn-close'>x </div>
            </NavLink>
          </div>
          <div className='modal__title-form'>{titleForm}</div>
          <form className='modal-form' onSubmit={isLogin ? handleSubmit : change}>
            <input
              ref={inputEmail}
              className='modal-form__input'
              type='text'
              name='user'
              placeholder='name'
              onChange={changeUsername}
              value={username}
            />
            <input
              ref={inputPassword}
              className='modal-form__input'
              type='password'
              name='password'
              placeholder='password'
              onChange={changePassword}
              value={password}
            />
            <button type='submit' className='modal-form__btn-ok' name='login'>
              {nameBtnForm}
            </button>
          </form>
          <div className='modal__msg'>{messageForm}</div>
          <div
            role='button'
            tabIndex={0}
            className='modal__login-or-register'
            onClick={changeStateForm}
            onKeyDown={changeStateForm}
          >
            {nameSubBtn}
          </div>
        </div>
      </div>
    </div>,
    modalBox,
  );
}
