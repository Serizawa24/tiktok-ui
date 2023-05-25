import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MusicIcon, HastagIcon } from '../../../components/Icons';
import AccountPreview from '../../../components/SuggestedAccounts/AccountPreview/AccountPreview';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import TippyHeadless from '@tippyjs/react/headless';
const cx = classNames.bind(styles);
function Content({ content },ref) {
  return (
    <div className={cx('wrapper')} >
      <div className={cx('content')}>
        <div className={cx('avatar-box')}>
          <img className={cx('avatar')} src={content.user.avatar} alt="avatar" />
        </div>
        <div className={cx('info')}>
          <div className={cx('content-container')}>
            <div className={cx('author-container')}>
              <h3 className={cx('author-nickname')}>
                <span>
                  <TippyHeadless
                    interactive
                    placement="bottom"
                    delay={[0, 40]}
                    offset={[0, 40]}
                    render={(attr) => (
                      <div className={cx('preview')} tabIndex="-1" {...attr}>
                        <PopperWrapper>
                          <AccountPreview data={content.user} />
                        </PopperWrapper>
                      </div>
                    )}
                  >
                    <span>{content.user.nickname}</span>
                  </TippyHeadless>
                </span>{' '}
                {content.user.tick && (
                  <span className={cx('vertify-icon')}>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                  </span>
                )}{' '}
              </h3>
              <h4 className={cx('author-fullname')}>{content.user.fullname}</h4>
            </div>
            <div className={cx('content-info')}>
              <span className={cx('content-description')}>{content.description
            }</span>
              <strong>
                { !!content.hastag && content.hastag.map((tag, index) => (
                  <Link key={index} className={cx('content-tag')} to={`/tag/${tag}`}>
                    <HastagIcon />
                    {tag}
                  </Link>
                ))}
              </strong>
              <br />
              <strong>
              { content.music.length > 0 &&
                <Button to={`/music/${content.music}`} className={cx('content-music')} text leftIcon={<MusicIcon />}>
                  {content.music}
                </Button>
              }
              </strong>
              <div className={cx('content-video')}>
                <video className={cx('video')} src={content.file_url} controls />
                <div className={cx('video-info')}></div>
              </div>
            </div>
          </div>
          <Button className={cx('follow-btn')} outline>
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
}

Content.propTypes = {
  item: PropTypes.object,
};
export default Content;
