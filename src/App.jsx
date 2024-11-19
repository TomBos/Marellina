import Home from './sites/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// === END OF IMPORTS ===



function App({DEVMODE}) {

  if (DEVMODE) {
    import('./styles/system/debug.scss');
  }

  return (
      <>
          <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element="The one and only Product Page"/>

                <Route path="*" element="404 - Page not found" />
                <Route path="/ctf" element="What are you doing here ?" />
            </Routes>
          </Router>
      </>
  );
}

export default App;
