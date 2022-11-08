
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import MainRoutes from './MainRoutes';
import Favourites from './MyComponents/Favourites';
import { Footer } from './MyComponents/Footer';
import Navbar from './MyComponents/Navbar';
import { StoreItem } from './MyComponents/StoreItem';

function App() {

  return (
    <div>
      
      <Navbar></Navbar> 
    <MainRoutes></MainRoutes>
      {/* <Favourites></Favourites> */}
      <Footer></Footer>  
      
      
         
    </div>
  );
}

export default App;
