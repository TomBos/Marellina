import Home from './sites/home';
import Console from './sites/console';
import LoginPage from './sites/login';
import NewProduct from './sites/newProduct';
import '../public/styles/system/variables.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// === END OF IMPORTS ===

export default function App() {

  return (
      <>
          <Router>
              <Routes>
                  {/* Public */}
                  <Route path="/" element={<Home/>}/>
                  <Route path="/products" element="The one and only Product Page"/>


                  {/* CMS */}
                  <Route path="/dashboard" element={<Console/>} />
                  <Route path="/sys" element={<LoginPage/>} />

                  <Route path="/new-product" element={<NewProduct/>} />



                  <Route path="/ctf" element="What are you doing here ?" />
                  <Route path="/*" element="404 - Page not found" />
              </Routes>
          </Router>
      </>
  );
}
