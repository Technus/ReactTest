import { createGlobalStyle } from "styled-components";

export const DarkStyle = createGlobalStyle`
  button:hover{
    background-color:wheat;
  }
  button:active{
    background-color:lime;
  }
  button:disabled{
    background-color:red;
  }
  
  *{
    font-family:"Consolas";
  }
`;