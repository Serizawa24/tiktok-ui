import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);

const AccountItem = forwardRef(({ data }, ref) => {
  return (
    <span>
      <TippyHeadless
        interactive
        placement="bottom"
        delay={[800, 0]}
        offset={[-20, 0]}
        render={(attr) => (
          <div className={cx('preview')} tabIndex="-1" {...attr}>
            <PopperWrapper>
              <AccountPreview data={data} />
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
          <div className={cx('item-info')}>
            <h4 className={cx('nickname')}>
              {data.nickname}
              {!!data.tick && (
                <Tippy content="Vertify" placement="right">
                  <span className={cx('vertify-icon')}>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} ref={ref} />
                  </span>
                </Tippy>
              )}
            </h4>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </TippyHeadless>
    </span>
  );
});
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
