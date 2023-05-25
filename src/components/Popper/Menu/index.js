import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, ...passProps }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleResetToFirstPage = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, -1));
  };

  return (
    <TippyHeadless
      {...passProps}
      onHide={handleResetToFirstPage}
      interactive
      delay={[0, 700]}
      offset={[24, 8]}
      hideOnClick={false}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </TippyHeadless>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
};
export default Menu;
