import './App.css';
import Nav from './component/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
