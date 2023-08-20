export const PHOTO_PREFIX = "/photo";

export const PHOTO = {
  HOMEPAGE_PHOTO: `${PHOTO_PREFIX}/home`,
  SEARCH_PHOTO: `${PHOTO_PREFIX}/search/:query`,
  DETAIL_PHOTO: `${PHOTO_PREFIX}/:id`,
};

const PATH = {
  //   LOGIN: "/",
  ...PHOTO,
};

export default PATH;
