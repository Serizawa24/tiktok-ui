import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button';
import PropTypes from 'prop-types';
import { MusicIcon, HastagIcon } from '../Icons';
const cx = classNames.bind(styles);
function Discover({ data }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('lable')}>Discover</p>
      {data.map((item, index) => (
        <Button
          to={`/${item.type}/${item.info}`}
          leftIcon={item.type === 'tag' ? <HastagIcon /> : <MusicIcon />}
          discover
          key={index}
        >
          {item.info}
        </Button>
      ))}
    </div>
  );
}
Discover.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Discover;
