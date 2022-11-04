
import './App.css';
import MainRoutes from './MainRoutes';
import Favourites from './MyComponents/Favourites';
import { Footer } from './MyComponents/Footer';
import Navbar from './MyComponents/Navbar';

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
