import logo from './logo.svg';
import './App.css';
import Header from "./components/layouts/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from "./components/layouts/Landing";

function App() {
  return (
    <div className="App">
      <Header/>
        <Landing></Landing>

    </div>
  );
}

export default App;
