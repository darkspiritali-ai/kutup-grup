import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import References from './pages/References';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';
import Preloader from './components/animations/Preloader';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/referanslar" element={<References />} />
        <Route path="/sss" element={<FAQ />} />
        <Route path="/gizlilik-politikasi" element={<Privacy />} />
        <Route path="/cerez-politikasi" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
