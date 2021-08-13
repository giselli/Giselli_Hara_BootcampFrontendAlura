import { css } from 'styled-components';
import theme from '../index';

const { breakpoints } = theme;

export function breakpointsMedia(cssByBreakpoint) {
const breakpointNames = Object.keys(breakpoints);
return breakpointNames
.filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
.map((breakpointName) => css`
@media only screen and (min-width: ${breakpoints[breakpointName]}px) {
${cssByBreakpoint[breakpointName]}
}
`);
}
THEME INDEX
export const colors = {
background: {
light: {
color: '#FFFFFF'
},
main: {
color: '#E9C46A'
}
},
borders: {
color: '#E9C46A'
},
primary: {
main: {
color: '#E9C46A',
contrastText: '#fff'
}
},
secondary: {
main: {
color: '#FFF8E6',
contrastText: '#000'
}
},
modes: {
dark: {}
}
}

export const breakpoints = {
xs: 0,
sm: 480,
md: 768,
lg: 992,
xl: 1200
}

export default {
colors,
breakpoints,
transition: '200ms ease-in-out',
fontFamily: "'Fira Sans Condensed', sans-serif",
};


