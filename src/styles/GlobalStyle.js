import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainstyle = {
  padding: "0 70px",
  mainColor: "rgba(190,44,55,1)",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    background-color: #1d1d1d;
    color: white;
    letter-spacing: -1px;
    font-family: 'Noto Sans KR', sans-serif;
}
a{
    text-decoration: none;
    color: white;
}

`;
