import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Character from './Pages/Character';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":characterId" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
