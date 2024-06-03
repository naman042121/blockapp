import logo from './logo.svg';
import './App.css';
import FormComponent from './components/home'
import ListPage  from './components/listpage'
import ViewPage from './components/viewpage'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My block app todo</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/list">Stored Data</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/view/:id" element={<ViewPage />} />
          </Routes>
        </main>
      </div>
    </Router>
    );
}

export default App;
