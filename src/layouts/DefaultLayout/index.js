import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../components/Sidebar';
import PropTypes from 'prop-types';
import Auth from '../../components/Auth';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
      <Auth />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
