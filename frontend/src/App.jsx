import Home from './sites/home';
import Console from './sites/console';
import LoginPage from './sites/login';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// === END OF IMPORTS ===

export default function App({DEVMODE}) {

  if (DEVMODE) {
    import('./styles/system/debug.scss');
  }

  return (
      <>
          <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element="The one and only Product Page"/>
                <Route path="/dashboard" element={<Console/>} />
                <Route path="/sys" element={<LoginPage/>} />

                <Route path="/*" element="404 - Page not found" />
                <Route path="/ctf" element="What are you doing here ?" />
            </Routes>
          </Router>
      </>
  );
}
