import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '../../../config';
import Discover from '../../../components/Discover/Discover';
import Footer from '../../../components/Footer';
import { getSuggested } from '../../../services/userSevice';
import { useState, useEffect } from 'react';
import { HomeIcon, UserGroupIcon, LiveIcon } from '../../../components/Icons';
import SuggestedAccounts from '../../../components/SuggestedAccounts';
const cx = classNames.bind(styles);

function Sidebar() {
  const suggestList = [
    {
      last_name: '',
      first_name: 'Ina',
      nickname: 'Ninomae Inanis',
      avatar:
        'https://yt3.ggpht.com/f4uYWHJxiGwyXm8NUlm818N1MRnywtgL6wM8JdWqWsKBzI7v1eg8dxDWG7igkWuukUSiufydqPg=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 1510000,
      likes_count: 999,
      bio: 'wah wah wah wah wah wah wah',
    },
    {
      last_name: '',
      first_name: 'Gura',
      nickname: 'Garw Gura',
      avatar:
        'https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 4280000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Ame',
      nickname: 'Amelia Waston',
      avatar:
        'https://yt3.ggpht.com/RZ4Fp3L6_zyq6YA7s5WnH8-22iezMLwdJhtkBgs_EAb06mvMCnF59JKMNu9YPCqb7nhaeXMdPvY=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 1730000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Kiara',
      nickname: 'Takanashi Kiara',
      avatar:
        'https://yt3.googleusercontent.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 1510000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Mori',
      nickname: 'Caliope Mori',
      avatar:
        'https://yt3.googleusercontent.com/8B_T08sx8R7XVi5Mwx_l9sjQm5FGWGspeujSvVDvd80Zyr-3VvVTRGVLOnBrqNRxZp6ZeXAV=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 2190000,
      likes_count: 999,
    },
  ];
  const followList = [
    {
      last_name: '',
      first_name: 'Ame',
      nickname: 'Amelia Waston',
      avatar:
        'https://yt3.ggpht.com/RZ4Fp3L6_zyq6YA7s5WnH8-22iezMLwdJhtkBgs_EAb06mvMCnF59JKMNu9YPCqb7nhaeXMdPvY=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 1730000 / 1000000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Kiara',
      nickname: 'Takanashi Kiara',
      avatar:
        'https://yt3.googleusercontent.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 1450000 / 1000000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Mori',
      nickname: 'Caliope Mori',
      avatar:
        'https://yt3.googleusercontent.com/8B_T08sx8R7XVi5Mwx_l9sjQm5FGWGspeujSvVDvd80Zyr-3VvVTRGVLOnBrqNRxZp6ZeXAV=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 2190000 / 1000000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Ina',
      nickname: 'Ninomae Inanis',
      avatar:
        'https://yt3.ggpht.com/f4uYWHJxiGwyXm8NUlm818N1MRnywtgL6wM8JdWqWsKBzI7v1eg8dxDWG7igkWuukUSiufydqPg=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 1510000 / 1000000,
      likes_count: 999,
      bio: 'wah wah wah wah wah wah wah',
    },
    {
      last_name: '',
      first_name: 'Gura',
      nickname: 'Garw Gura',
      avatar:
        'https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 4280000 / 1000000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Kroni',
      nickname: 'Ouro Kronii',
      avatar:
        'https://yt3.ggpht.com/ntCVYU9_M3j3G_lYEKTaBsIRmB2ZA1W6uu3n7bHCwaT2HvzqL1t5ABhGaZ3ucfm1yP3-9hFQuw=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 846000 / 1000000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Mumei',
      nickname: 'Nanashi Mumei',
      avatar:
        'https://yt3.ggpht.com/owZmjfnG_SGVmfkl3eS7Lv47pGvIr2SrS36imh6O8i0H3Wy41fYKD26U7wnyRB627fXoq0aQ0Q=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 790000 / 1000000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Fauna',
      nickname: 'Ceres Fauna',
      avatar:
        'https://yt3.ggpht.com/cBtserkb211p6If2OewgWd8oriIKRkfwTcP4_Vdq2YETG5TK9Q02v4cYmnLU03KBAJ0gcDha7oQ=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 679000 / 1000000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Baelz',
      nickname: 'Hakos Baelz',
      avatar:
        'https://yt3.ggpht.com/7gFSRIM3_DhczV8AYjeP4EaS0OL-u_xLvIh9JhG9zJhPYEfVwsoUOK61L6eBlLjnPHN-EDvytQ=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 691000 / 1000000,
      likes_count: 999,
    },
    {
      last_name: '',
      first_name: 'Irys',
      nickname: 'Irys',
      avatar:
        'https://yt3.googleusercontent.com/oC30wBZ04ibFN7AQVHAjdUX-3nS-h4DDjJBYVlsKt0OF6t1CZwrgzWlr3rS6Q12kXrw3-mt9gg=s176-c-k-c0x00ffffff-no-rj-mo',
      tick: true,
      followers_count: 916000 / 1000000,
      likes_count: 999,
    },
  ];
  const discover = [
    {
      type: 'tag',

      info: 'Takamori',
    },
    {
      type: 'tag',

      info: 'Amesame',
    },
    {
      type: 'tag',

      info: 'Pekomiko',
    },
    {
      type: 'tag',

      info: 'HoloFest',
    },
    {
      type: 'music',

      info: 'REFLECT - Gawr Gura',
    },
    {
      type: 'music',

      info: 'Gawr Gura x Hakos Baelz - Sweet Appetite',
    },
    {
      type: 'music',

      info: 'Chikutaku - Amelia Waston',
    },
    {
      type: 'music',

      info: 'Non-Fiction - Myth',
    },
  ];
  const INIT_PAGE = 1;
  const PER_PAGE = 5;
  const [page, setPage] = useState(INIT_PAGE);
  const [isSeeAll, setIsSeeAll] = useState(false);
  const [suggestedUser, setSuggestedUser] = useState([]);
  useEffect(() => {
    getSuggested({ page, perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUser((prev) => [...prev, ...data]);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const handleSeeAll = (isSeeAll) => {
    setIsSeeAll((prev) => !prev);
    if (isSeeAll) {
      setPage(page + 1);
    } else {
      //slice 5 elements end array
      setSuggestedUser((prev) => prev.slice(0, 5));
    }
  };

  return (
    <span className={cx('sidebar')}>
      <aside className={cx('wrapper')}>
        <Menu>
          <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} />
          <MenuItem title="Following" to={config.routes.followings} icon={<UserGroupIcon />} />
          <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
        </Menu>

        <SuggestedAccounts
          data={suggestedUser}
          isSeeAll={isSeeAll}
          label="Suggested accounts"
          onSeeAll={handleSeeAll}
        />
        <SuggestedAccounts data={followList} label="Following accounts" />
        <Discover data={discover} label="Discover" />
        <Footer />
      </aside>
    </span>
  );
}

export default Sidebar;
