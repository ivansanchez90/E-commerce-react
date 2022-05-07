import { useState } from 'react';
import {Routes, Route} from 'react-router-dom;'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/producto/:id" element={<Producto />}/>
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/carrito" element={<Carrito />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    
  )
}

export default App
