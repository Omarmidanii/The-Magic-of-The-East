import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face{
        font-family: 'Arslan';
        src:url('Fonts1/Arslan.ttf') format('truetype');
    }
         @font-face{
        font-family: 'Khebrat';
        src:url('Fonts1/Khebrat.ttf') format('truetype');
    }
        @font-face{
        font-family: 'Beiruti';
        src:url('Fonts1/Beiruti.ttf') format('truetype');
    } 
         @font-face{
        font-family: 'Noto';
        src:url('Fonts1/Noto.ttf') format('truetype');
    } `}
  />
);

export default Fonts;
