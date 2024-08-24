import './App.css';
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import MyOrder from './screens/MyOrder';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import 'bootstrap/dist/js/bootstrap.min.js'
import {CartProvider} from './components/ContextReducer';

function App() {
  return (
   <CartProvider>

    <Router>
      <div>
      <Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/login" element={<Login/>}/>
<Route exact path="/createuser" element={<Signup/>}/>
<Route exact path="/myOrder" element={<MyOrder/>}/>


   
      </Routes>
      </div>

    </Router>
   </CartProvider>
  
  );
}

export default App;
