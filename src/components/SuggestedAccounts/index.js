import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccounts({ data = [], isSeeAll = false, label, onSeeAll }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('lable')}>{label}</p>

      {data.map((item, index) => (
        <AccountItem key={index} data={item} />
      ))}

      <p
        className={cx('see-all')}
        onClick={() => {
          onSeeAll(!isSeeAll);
        }}
      >
        {isSeeAll ? 'See less' : 'See all'}
      </p>
    </div>
  );
}
SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};
export default SuggestedAccounts;
