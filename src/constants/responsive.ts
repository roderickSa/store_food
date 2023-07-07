/*
 * For more information, review this: shorturl.at/aDKQS
 */
const WIDTHS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const SIZES = {
  sm: `${WIDTHS.sm}px`,
  md: `${WIDTHS.md}px`,
  lg: `${WIDTHS.lg}px`,
  xl: `${WIDTHS.xl}px`,
};

const MEDIA_QUERIES_MIN = {
  sm: `(min-width: ${SIZES.sm})`,
  md: `(min-width: ${SIZES.md})`,
  lg: `(min-width: ${SIZES.lg})`,
  xl: `(min-width: ${SIZES.xl})`,
};

const MEDIA_QUERIES_MAX = {
  sm: `(max-width: ${SIZES.sm})`,
  md: `(max-width: ${SIZES.md})`,
  lg: `(max-width: ${SIZES.lg})`,
  xl: `(max-width: ${SIZES.xl})`,
};

export { MEDIA_QUERIES_MIN, MEDIA_QUERIES_MAX, SIZES, WIDTHS };
