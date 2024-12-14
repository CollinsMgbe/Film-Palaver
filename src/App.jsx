import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Movie from './components/Movie';
import DownloadPage from './components/DownloadPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/download/:id" element={<DownloadPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </QueryClientProvider>
  );
};

export default App;
