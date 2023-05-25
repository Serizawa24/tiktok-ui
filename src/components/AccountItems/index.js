import styles from './AccountItems.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import Image from '../Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const AccountItems = forwardRef(({ data }, ref) => {
  return (
    <Link to={`/profile/${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt="Hoa" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          <Tippy content="Vertify" placement="right">
            {data.tick && (
              <span className={cx('vertify-icon')}>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} ref={ref} />
              </span>
            )}
          </Tippy>
        </h4>
        <span className={cx('username')}> @{data.nickname} </span>
      </div>
    </Link>
  );
});
AccountItems.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItems;
