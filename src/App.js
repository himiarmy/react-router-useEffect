import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsList from './components/ProductsList/ProductsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';


const App = () => {
  return (
    // <div className="App">
    //   <ProductsList/>
    // </div>
    // указываем, что роутинг будет в браузере
    <BrowserRouter>
    {/* header будет на всех наших страницах */}
    <Header/>
    {/* для перечисления роутов */}
    <Routes>
      {/* непосредственно сами роуты */}
      <Route path="/" element={<ProductsList/>}/>
      <Route path="/add-product" element={<h1>Add product</h1>}/>
      <Route path="/edit-product" element={<h1>Edit product</h1>}/>
      <Route path="/contacts" element={<h1>Contacts</h1>}/>
      <Route path="/about-us" element={<h1>About Us</h1>}/>
    </Routes>
    {/* footer будет на всех страницах */}
    <h1>Footer</h1>
    </BrowserRouter>
  );
}

export default App;
