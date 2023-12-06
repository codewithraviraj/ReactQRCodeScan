
import './App.css';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  // Link
} from "react-router-dom";

import QRCodeEx from './component/QRCodeEx';
import Home from './component/Home';

function App() {
  return (
    <Router>
  
      <Routes>

        <Route exact path="/" element={<Home/>}/>
         
        

        <Route exact path="/qr_Scanner" element={<QRCodeEx/>}/>
          
     

      </Routes>
    
    </Router>
  );
}

export default App;
