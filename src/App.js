import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import routes from './routes';

function App() {
  const showContentMenus = () => {
    let result = null;
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          element={route.element}
        />
      )
    })
    return <Routes>{result}</Routes>;
  }

  return (
    <Router>
      {/* <ScrollToTop> */}
      {showContentMenus(routes)}
      {/* </ScrollToTop> */}
    </Router>
  );
}

export default App;
