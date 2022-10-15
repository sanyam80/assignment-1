
import './App.css';
import Home from './components/Home';
import SingleProducts from "./components/singleProducts.js";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path = "/" element = {<Home />}></Route>
      <Route path = "/:id" element = {<SingleProducts />}></Route>
     </Routes>

    </div>
  );
}

export default App;
