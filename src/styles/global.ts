import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root{
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;

    --color-gray-600: #333333;
    --color-gray-300: #828282;
    --color-gray-100: #e0e0e0;
    --color-gray-0: #f5f5f5;


    --color-negative: #e60000;
    --color-warning: #ffcd07;
    --color-sucess: #168821;
    --color-information: #155bcb;

    --font-size-1: 26px;
    --font-size-2: 22px;
    --font-size-3: 18px;
    --font-size-4: 16px;
    --font-size-5: 14px;
    --font-size-6: 12px;

    --font-weight-bold: 700;
    --font-weight-semibold: 600;
    --font-weight-regular: 400;

    --radius: 8px;
    --radius-2: 5px;

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }

  ul{
    list-style: none;
  }


`