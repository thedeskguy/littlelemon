import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>


      <Footer />
    </>
  );
}

export default App;
