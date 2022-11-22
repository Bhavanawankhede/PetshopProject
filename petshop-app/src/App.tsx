
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import MainRoutes from './MainRoutes';
import { CartItem } from './MyComponents/CartItem';

import { Footer } from './MyComponents/Footer';
import Navbar from './MyComponents/Navbar';
import { Store } from './MyComponents/Store';
import { StoreItem } from './MyComponents/StoreItem';

function App() {

  return (
    <div>
    
    <Navbar></Navbar> 
    <MainRoutes></MainRoutes>
      {/* <Favourites></Favourites>   */}
      <Footer></Footer>  
      
      
  
      
         
    </div>
  );
}

export default App;
