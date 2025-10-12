import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homes from './pages/Homes';
import SignIn from './pages/SignIn';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homes/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
  );
}

export default App
