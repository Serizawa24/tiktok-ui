import images from '../../asset/images';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
const Image = forwardRef(({ src, alt, fallBack: customFallback = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');
  const handleError = () => {
    setFallBack(customFallback);
  };
  return <img src={src || fallBack} {...props} alt="images" ref={ref} onError={handleError} />;
});
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallBack: PropTypes.string,
  className: PropTypes.string,
};
export default Image;
