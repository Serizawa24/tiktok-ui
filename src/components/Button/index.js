import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const Button = forwardRef(
  (
    {
      to,
      href,
      leftIcon,
      rightIcon,
      onClick,
      outlineBlack,
      rounded = false,
      disable = false,
      text = false,
      outline = false,
      small = false,
      large = false,
      discover = false,
      children,
      primary,
      className,
      ...passProps
    },
    ref,
  ) => {
    let Comp = 'button';

    const props = {
      onClick,
      ...passProps,
    };

    if (disable) {
      Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
          delete props[key];
        }
      });
    }

    if (to) {
      props.to = to;
      Comp = Link;
    } else if (href) {
      props.href = href;
      Comp = 'a';
    }

    return (
      <Comp
        className={cx(`wrapper`, {
          text,
          primary,
          outline,
          small,
          large,
          disable,
          rounded,
          discover,
          outlineBlack,
          [className]: className,
        })}
        {...props}
        ref={ref}
      >
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
    );
  },
);
Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  outlineBlack: PropTypes.bool,
  rounded: PropTypes.bool,
  disable: PropTypes.bool,
  text: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  primary: PropTypes.bool,
  discover: PropTypes.bool,
  className: PropTypes.string,
};
export default Button;
