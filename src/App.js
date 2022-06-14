import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/Navigation/navbar.component';
import Home from './routes/home/home.component';

// just for experimentation
const Cart = () => {
  return <h1 style={{background: 'olive', color: 'pink'}}>Welcome to your shopping cart!</h1>
};

const AboutUs = () => {
  return <h3 style={{ background: 'skyblue', color: 'goldenrod', padding: '20px', border: 'solid' }}>How our nitch biz came into existence...</h3>
} 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='about-us' element={<AboutUs />} />
      </Route>
    </Routes>
  )
};

export default App;
