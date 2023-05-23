import './App.css';
import Nav from './component/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import useStyles from './styles/styles';
import Signup from './pages/signup';

const myTheme = createTheme({
  palette: {
    secondary: { main: "#132f4c" },
    primary: { main: "#54b0af" }
  },
  typography: {
    h1: {
      textTransform: "capitalize",
      textShadow: "0px 0px 20px purple",
      color: "white"
    }
  }
})

function App() {

  let [isDay, setday] = useState(true);
  let classes = useStyles();

  return (
    <div className={isDay ? classes.AppLight : classes.AppDark}>
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>

          <Nav isDay={isDay} setday={setday} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </div>

  );
}

export default App;
