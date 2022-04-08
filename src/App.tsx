import { useEffect, useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box: 
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FloatButton = styled.button`
  position: fixed;
  width: 4rem;
  height: 4rem;
  top: 20px;
  right: 20px;
  background-color: ${props => props.theme.accentColor};
  color: white;
  border: none;
  border-radius: 50%;
`;

function App() {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <FloatButton
        onClick={() => {
          setTheme(theme === darkTheme ? lightTheme : darkTheme);
          localStorage.setItem("theme", theme === darkTheme ? "dark" : "light");
        }}
      >
        Change Theme
      </FloatButton>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default App;
