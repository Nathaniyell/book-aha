import { Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home'
import About from './About/About';
import SignUp from './SignUp/SignUp';
import Navbar from './components/Navbar';

function App() {
<Routes>
  <Route exact path='/' element={< Home />}></Route>
  <Route exact path='/' element={< About  />}></Route>
  <Route exact path='/' element={< SignUp />}></Route>
</Routes>

  return (
    <>
  <Navbar />
    </>
  );
}

export default App;
