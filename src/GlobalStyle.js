import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default createGlobalStyle`
  ${styledNormalize}

  html body{
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }
`
