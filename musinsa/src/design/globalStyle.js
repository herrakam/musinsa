import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const mixin = {
  flexbox: ({ dir = 'row', horizontal = '', vertical = '' }) => `
    display: flex;
    flex-direction: ${dir};
    justify-content: ${horizontal};
    align-items: ${vertical};
    `,
};

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        background: none;
        border:none;
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-style: normal;
}
`;
export default GlobalStyles;
