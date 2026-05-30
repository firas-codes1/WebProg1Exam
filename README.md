F. H, International Students Joensuu

To run the app:
-open cmd, navigate to its folder (cd Desktop and so on)

-run npm create vite@latest exam -- --template react

-No for rolldown-vite usage

-Yes for installing and run with npm

-Then click ctrl+c to return to cmd

-cd exam

=replace the src folder in exam with the one from the ZIP file 

-install bootstrap by running:npm install bootstrap 

-then write in src/index.js:

import 'bootstrap/dist/css/bootstrap.min.css';

-npm run dev  //then go to browser link 

Should work 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
