import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Settings from '../pages/Settings';
import Feedback from '../pages/Feedback';
import Coins from '../pages/Coins';
import Live from '../pages/Live';
import { HeaderOnly } from '../layouts';
////
import config from '../config';
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.followings,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
    layout: HeaderOnly,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: HeaderOnly,
  },
  {
    path: config.routes.settings,
    component: Settings,
  },
  {
    path: config.routes.feedback,
    component: Feedback,
  },
  {
    path: config.routes.coins,
    component: Coins,
  },
  {
    path: config.routes.live,
    component: Live,
  },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
