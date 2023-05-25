import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('about')}>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          About
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Newsroom
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Contact
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Carrers
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          ByteDance
        </a>
      </div>
      <div className={cx('more')}>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Tiktok for Good
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Advertise
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Devolopers
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Transparency
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Tiktok Rewards
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Tiktok Browse
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Tiktok Embeds
        </a>
      </div>
      <div className={cx('extras')}>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Help
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Safety
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Terms
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Privacy
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Creator Portal
        </a>
        <a href={'https://tiktok.com'} target="_blank" rel="noreferrer" className={cx('footer-btn')}>
          Comunity Guideliness
        </a>
      </div>
      <span className={cx('author')}>© 2023 TikTok</span>
    </footer>
  );
}

export default Footer;
