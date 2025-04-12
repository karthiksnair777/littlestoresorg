# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



steps to build a react app

npm create vite@latest projectFair -- --template react
cd projectFair
code.


npm i
npm i react-bootstrap bootstrap

then go to app.jsx and remove unwanteed
then index.css and app.css
in index-
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

npm run dev

if planning to add a template
add that in to folder
main.jsx - 
import './bootstrap.min.css'

then font awesome cdn
google font
bootstrap cdn if neeeded


create page and component

rfce

npm i react-router-dom


main.jsx
app component in browserrouter
import also

setting path in app.jsx
import routes and route
also import the pages
import Home from './pages/Home';
<Routes>
<Route path="/" element={<Home/>}/>
</Routes>