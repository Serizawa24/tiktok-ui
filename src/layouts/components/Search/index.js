import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '../../../hooks';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import * as searchService from '../../../services/searchService';
////////////////////////////////
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItems from '../../../components/AccountItems';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(searchValue, 700);

  const inputRef = useRef();

  const handleChange = (e) => {
    const searchValue = e.target.value;
    const regex = /^\S/;
    if (regex.test(searchValue)) {
      setSearchValue(searchValue);
    } else {
      setSearchValue('');
    }
  };

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const results = await searchService.search(debouncedSearch);
      setSearchResults(results);
      setLoading(false);
    };

    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const handleHideResults = () => {
    setShowResults(false);
  };

  return (
    <div>
      <TippyHeadless
        interactive
        visible={showResults && searchResults.length > 0}
        content="Search"
        onClickOutside={handleHideResults}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResults.map((item) => (
                <AccountItems key={item.id} data={item} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Seach accounts and videos"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResults(true)}
          />
          {!!searchValue && !loading && (
            <button
              className={cx('clear')}
              onClick={() => {
                setSearchValue('');
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
