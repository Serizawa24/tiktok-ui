import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import PropTypes from 'prop-types';
import Content from '../../layouts/components/Content';
import { getVideoList } from '../../services/videoService';
import { useState,useEffect,useRef } from 'react';


const cx = classNames.bind(styles);

function Home() {

  const INIT_PAGE = 1;
  const INIT_TYPE = 'for-you';
  const [page, setPage] = useState(INIT_PAGE);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoList({ page, type:INIT_TYPE })
      .then((data) => {
        setVideos((prev) => [...prev, ...data]);
      })
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cx('wrapper')} >
      {videos.map((item, index) => (
        <Content key={index} content={item} />
      ))}
    </div>
  );
}

Home.propTypes = {
  children: PropTypes.node,
};
export default Home;
