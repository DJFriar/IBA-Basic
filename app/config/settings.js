import Constants from 'expo-constants';

const settings = {
  dev: {
    statusBarColor: 'orange',
  },
  test: {
    statusBarColor: 'blue',
  },  
  prod: {
    statusBarColor: '#c0dffd',
  },
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'test') return settings.test;
  return settings.prod;
}

export default getCurrentSettings();