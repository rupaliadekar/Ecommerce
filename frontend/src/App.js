import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
     {/* <h1>Hello</h1> */}
     <BrowserRouter>
     <Nav/>
     <Routes>
     
      <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/update" element={<h1>Update compo</h1>} />
        <Route path="/logout" element={<h1>Logout compo</h1>} />
        <Route path="/profile" element={<h1>Profile compo</h1>} />
        </Route>

        <Route path="/signup" element={<SignUp/>} />
     </Routes>
     </BrowserRouter>
     <Footer/>

     
    
    </div>
  );
}

export default App;
