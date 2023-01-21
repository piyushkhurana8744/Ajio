import AllRoutes from './routes/AllRoutes';
import './App.css';
import Navbar from './routes/Navbar';
import { useMediaQuery } from '@chakra-ui/react'
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
function App() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  return (
    <div className="App">
     {isLargerThan800?<Navbar />:<MobileNav />}
      <AllRoutes />
      <Footer  />
    </div>
  );
}

export default App;