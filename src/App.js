import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>


      <Footer />
    </>
  );
}

export default App;
