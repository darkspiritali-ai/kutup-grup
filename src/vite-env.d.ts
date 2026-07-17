/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'styled-jsx/css' {
  const css: any;
  export default css;
}
