import './App.css';
import Home from './screens/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Register from './screens/Register';

import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import Contactus from './components/Contactus';


function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/createUser' element={<Register/>}/>
      <Route exact path='/myOrder' element={<MyOrder/>}/>
      <Route exact path='/Contactus' element={<Contactus/>}/>
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;



// import './App.css';
// import Home from './screens/Home';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Login from './screens/Login';
// import Register from './screens/Register';

// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// import { CartProvider } from './components/ContextReducer.js';
// import MyOrder from './screens/MyOrder.js';


// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div className='fs-1'>
//           <Routes>
//             <Route exact path='/' element={<Home />} />
//             <Route exact path='/login' element={<Login />} />
//             <Route exact path='/createUser' element={<Register />} />
//             <Route exact path='/myOrder' element={<MyOrder />} />

//           </Routes>
//         </div>
//       </Router>

//     </CartProvider>

//   );
// }

// export default App;