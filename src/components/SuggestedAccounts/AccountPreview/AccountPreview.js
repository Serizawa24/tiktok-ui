import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx('preview')}>
      <header className={cx('preview-header')}>
        <img className={cx('avatar')} src={data.avatar} alt="avatar" />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </header>
      <div className={cx('preview-body')}>
        <h4 className={cx('nickname')}>
          {data.nickname}
          <span className={cx('vertify-icon')}>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </span>
        </h4>
        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
      </div>
      <footer className={cx('preview-footer')}>
        <p className={cx('followers')}>
          <span className={cx('count')}>{data.followers_count}</span> Followers
        </p>
        <p className={cx('likes')}>
          <span className={cx('count')}>{data.likes_count}</span> Likes
        </p>
      </footer>
      {data.bio && (
        <div className={cx('bio-wrapper')}>
          <p className={cx('bio')}>{data.bio}</p>
        </div>
      )}
    </div>
  );
}
AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountPreview;
