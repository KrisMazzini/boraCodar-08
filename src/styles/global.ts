import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './themes/default'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        background: ${defaultTheme.background.main};
    }

    body, p, span {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 160%;
        color: ${defaultTheme.text.main}
    }

    body {
        min-height: 100vh;
        min-width: 350px;
        overflow: auto;

        padding: 2rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: 1024px) {
            padding: 3rem 8rem;
        }
    }
`
