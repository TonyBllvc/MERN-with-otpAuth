import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  const { user } = useAuthContext()
  // const location = useLocation

  return (
    <div className="create">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/'
             element={user ? <Home /> : <Navigate to={'/login'} /> }
              />
            <Route path='/login' element={ !user ? <Login/> : <Navigate to={'/'} /> } />
            <Route path='/signup' element={!user ? <Signup/> : <Navigate to={'/'} />} />
          
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
