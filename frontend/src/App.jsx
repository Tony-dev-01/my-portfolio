
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="*" element={<h1>404: Not Found!</h1>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
