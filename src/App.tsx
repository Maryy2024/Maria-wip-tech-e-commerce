import './App.css';
import Login from './pages/Login/Login';
import useCrud from './hooks/useCrud';

function App() {
const {products, setProducts} = useCrud();
console.log(products);
  return (
    <>
      <h1>
        Admin Interface
      </h1>

      <Login />
    </>
  );
}

export default App;
