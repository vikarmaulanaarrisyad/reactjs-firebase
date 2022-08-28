import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from '../register';
import Login from '../login';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
