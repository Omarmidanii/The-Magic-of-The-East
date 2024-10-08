import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face{
        font-family: 'Arslan';
        src:url('/src/assets/Arslan.ttf') format('truetype');
    }
         @font-face{
        font-family: 'Khebrat';
        src:url('/src/assets/Khebrat.ttf') format('truetype');
    }
        @font-face{
        font-family: 'Beiruti';
        src:url('/src/assets/Beiruti.ttf') format('truetype');
    } `}
  />
);

export default Fonts;
