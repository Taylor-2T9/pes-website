import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    color: 'black';
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
}
body::after{
   position:absolute; width:0; height:0; overflow:hidden; z-index:-1;
}
`

export default GlobalStyle;