import './App.css';
import { Auth } from "./components";
import Dashboard  from './pages/Dashboard';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { auth } from "./config/firebase.js";
import { Box } from '@mui/material'
import Navbar from './components/Navbar/Navbar';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Box>
      <Navbar/>
      {user ? <Dashboard /> : <Auth/>}
    </Box>
  )
}

export default App
