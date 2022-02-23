import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Switch } from 'react-native-web';
import Header from './header';
import Home from './welcome';
import Products from './products'
import ProductDetails from './productDetails';
import Records from './connectwithbackend/votingrecords';
import PersonAdd from './apiexamples/add';
import Addproduct from './Addproduct';
function App() {
  return (
    
    <div className="App">
      <Header></Header>
      <BrowserRouter basename='/'>
        <Routes>
      <Route path="home" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:name" element = {<ProductDetails/>} ></Route>
      <Route path="records" element={<Records/>}></Route>
      <Route path="adduser" element={<PersonAdd/>}></Route>
      <Route path="addproduct" element={<Addproduct/>}></Route>
      </Routes>
      </BrowserRouter>
     
      
       
    </div>
  );
}

export default App;
