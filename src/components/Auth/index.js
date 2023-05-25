import styles from './Auth.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState,useRef } from 'react';
import { loginService,registerService } from '../../services/authService';

const cx = classNames.bind(styles);

function Login() {
  const [type,setType] = useState('Login')

  const formRef = useRef();
  const handleChangeType = () => {
    if (type === 'Login') {
      setType('Register');
    } else {
      setType('Login');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formRef.current)
    console.log('submit');
    let inputs = formRef.current.querySelectorAll("[name]");
    let dataSubmit = Array.from(inputs).reduce((values, input) => {
      values[input.name] = input.value;
      return values;
    },{})
    
    let result;
    
    if (type === 'Login') {
      result = await loginService(dataSubmit)
    } else {
      result = await registerService(dataSubmit)

    }
  };

  return (
    <div className={cx('wrapper')} >
      <form action="POST" className={cx('form')} ref={formRef} id="form-log">
        <h3 className={cx('heading')}>{type}</h3>

        <div className={cx('form-group')}>
          <label htmlFor="email" className={cx('form-label')}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="VD: email@domain.com"
            className={cx('form-control')}
          />
          <span className={cx('form-message')}></span>
        </div>

        <div className={cx('form-group')}>
          <label htmlFor="password" className={cx('form-label')}>
            Mật khẩu
          </label>
          <input
            id="password"
            autoComplete="on"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className={cx('form-control')}
          />
          <span className={cx('form-message')}></span>
        </div>

        <button className={cx('form-submit')} onClick={(e)=>{
          handleSubmit(e)
        }}>{type}</button>
        
        <div className={cx('spacer')}></div>

        <div className={cx('form-group')}>
          <p className={cx('form-rule')}>
            {' '}
            By continuing, you agree to TikTok’s <Link className={cx('link')} to='https://tiktok.com'>Terms of Service</Link > and confirm that you have read TikTok’s{' '}
            <Link className={cx('link')} to ='https://tiktok.com'>Privacy Policy</Link>.
          </p>
        </div>

        <div className={cx('spacer')}></div>

        <div className={cx('form-group')}>
        <p className={cx('footer')}>
        Don't have an account?
    <span className={cx('options')} onClick={handleChangeType} > {type==='Login'?"Sign up" : "Login"} </span>
        </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
