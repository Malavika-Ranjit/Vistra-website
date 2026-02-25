import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Layer1 from '../pages/dblayer1';
import Layer2 from '../pages/dblayer2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dblayer1" element={<Layer1 />} />
      <Route path="/dblayer2" element={<Layer2 />} />
    </Routes>
  );
}

export default App;
