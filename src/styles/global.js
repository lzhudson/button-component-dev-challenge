import { createGlobalStyle } from 'styled-components';
import NotoSans100Woff from '../fonts/noto-sans-jp-v40-latin-100.woff';
import NotoSans100Woff2 from '../fonts/noto-sans-jp-v40-latin-100.woff2';
import NotoSans300Woff from '../fonts/noto-sans-jp-v40-latin-300.woff';
import NotoSans300Woff2 from '../fonts/noto-sans-jp-v40-latin-300.woff2';
import NotoSans400Woff from '../fonts/noto-sans-jp-v40-latin-regular.woff';
import NotoSans400Woff2 from '../fonts/noto-sans-jp-v40-latin-regular.woff2';
import NotoSans500Woff from '../fonts/noto-sans-jp-v40-latin-500.woff';
import NotoSans500Woff2 from '../fonts/noto-sans-jp-v40-latin-500.woff2';
import NotoSans700Woff from '../fonts/noto-sans-jp-v40-latin-700.woff';
import NotoSans700Woff2 from '../fonts/noto-sans-jp-v40-latin-700.woff2';
import NotoSans900Woff from '../fonts/noto-sans-jp-v40-latin-900.woff';
import NotoSans900Woff2 from '../fonts/noto-sans-jp-v40-latin-900.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 100;
    src: local(''),
        url(${NotoSans100Woff}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${NotoSans100Woff2}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url(${NotoSans300Woff}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${NotoSans300Woff2}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${NotoSans400Woff}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${NotoSans400Woff2}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url(${NotoSans500Woff}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${NotoSans500Woff2}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url(${NotoSans700Woff}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${NotoSans700Woff2}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 900;
    src: local(''),
        url(${NotoSans900Woff}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${NotoSans900Woff2}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
