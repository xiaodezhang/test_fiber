import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Monitor from './pages/monitor'
import Calibrate from './pages/calibrate'
import HeadShow from './pages/headShow'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="headshow" element={<HeadShow/>} />
          <Route path="calibrate" element={<Calibrate/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
