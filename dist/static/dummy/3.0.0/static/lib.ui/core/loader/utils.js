var LIGHT = 'light';
var DARK = 'dark'; // eslint-disable-next-line complexity, comment: complexity of 13

var getLoaderColorScheme = function getLoaderColorScheme(colorScheme) {
  switch (colorScheme) {
    case 'secondary':
    case 'link':
    case 'dark':
      return DARK;

    case 'base':
    case 'purple':
    case 'blue':
    case 'green':
    case 'skyblue':
    case 'black':
    case 'gold':
    case 'aqua':
    case 'light':
    default:
      return LIGHT;
  }
};

export { DARK, LIGHT, getLoaderColorScheme };
//# sourceMappingURL=utils.js.map
