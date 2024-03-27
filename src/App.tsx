import './App.css';
import Router from './router/Router';
import Footer from './components/Footer/Footer'

function App() {
  document.body.style.minHeight = "100vh"
  document.body.style.position = "relative"
  return (
    <>
      <Router />

      <Footer />
    </>
  );
}

export default App;
