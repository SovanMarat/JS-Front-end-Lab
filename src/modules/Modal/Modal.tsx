import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './Modal.scss';

export default function Modal() {
  const modalBox = document.createElement('div');
  document.body.append(modalBox);

  return ReactDOM.createPortal(
    <div className='wrapperModal'>
      <div className='modalBox'>
        <div className='modalBody'>
          <form className='modalForm'>
            <input className='inputDataUser' type='text' name='name' placeholder='name' />
            <input className='inputDataUser' type='text' name='password' placeholder='password' />
            <NavLink to='/'>
              <div className='btnSignIn start'>Sign In</div>
            </NavLink>
          </form>
        </div>
      </div>
    </div>,
    modalBox,
  );
}
