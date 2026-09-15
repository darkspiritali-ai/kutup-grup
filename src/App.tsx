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
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import MetaHelper from './components/seo/MetaHelper';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <MetaHelper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/referanslar" element={<References />} />
        <Route path="/sss" element={<FAQ />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostRoute />} />
        <Route path="/gizlilik-politikasi" element={<Privacy />} />
        <Route path="/cerez-politikasi" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function BlogPostRoute() {
  const { pathname } = useLocation();
  return <BlogPost slug={pathname.replace('/blog/', '')} />;
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
