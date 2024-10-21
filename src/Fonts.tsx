import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face{
        font-family: 'Arslan';
        src:url('/src/assets/Fonts/Arslan.ttf') format('truetype');
    }
         @font-face{
        font-family: 'Khebrat';
        src:url('/src/assets/Fonts/Khebrat.ttf') format('truetype');
    }
        @font-face{
        font-family: 'Beiruti';
        src:url('/src/assets/Fonts/Beiruti.ttf') format('truetype');
    } 
         @font-face{
        font-family: 'Noto';
        src:url('/src/assets/Fonts/Noto.ttf') format('truetype');
    } `}
  />
);

export default Fonts;
