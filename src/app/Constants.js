export const SERVER = (process.env.NODE_ENV === 'production') ? './' : 'http://localhost:3000/';

export const PAGE_SIZE = {
  MOBILE: 3,
  TABLET: 5,
  DESKTOP: 7
}

export const DATA_URL = {
  CONFIG: 'data/config.json',
  PHOTO_LD: 'data/london.json',
  PHOTO_NY: 'data/ny.json',
  PHOTO_PR: 'data/paris.json',
  PHOTO_RM: 'data/rome.json'
}
