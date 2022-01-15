import logo from './logo.svg';
import './App.css';
import Slider from './components/slider'
import Cards from './components/cards';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">React Bootstrap</a>
            
            <form class="d-flex">
              <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form>

          </div>
      </nav> 

      <Slider />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
