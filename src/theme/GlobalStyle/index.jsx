import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
text-decoration: none;
}
${normalize}
html,
body {
margin: 0;
padding: 0;
font-family: 'Fira Sans Condensed';
}
/* Full height layout */
html, body {
display: flex;
min-height: 100vh;
width: 100%;
}
#__next {
flex: 1;
display: flex;
flex-direction: column;
}

.mim {
    color: #000000;
    text-decoration: none;
}
`;

export default GlobalStyle;
