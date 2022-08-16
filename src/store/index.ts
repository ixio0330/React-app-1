import postStore from './post';
import appStore from './app';
import userStore from './user';

const store = () => ({
  postStore,
  appStore,
  userStore,
});

export default store;