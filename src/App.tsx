import './App.css';
import Store from './pages/Store/Store';
import useCrud from './hooks/useCrud';
import Router from './router/Router';
import Searchbar from './components/Searchbar/Searchbar';
import Cart from './components/Cart/Cart'
import Product from './types/Product'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
    <Searchbar />
  
      <Router />

      <Footer />
    </>
  );
}

export default App;
