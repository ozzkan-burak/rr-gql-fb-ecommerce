// pages
import Layout from "./pages/Layout";
import HomePage from './pages/home';
// components
import Header from "./components/Header";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
