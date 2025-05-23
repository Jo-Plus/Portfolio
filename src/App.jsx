import { useEffect, useState } from 'react'
import Header from './components/1-Header/Header'
import Hero from './components/2-Hero/Hero'
import Main from './components/3-Main/Main'
import Contact from './components/4-Contact/Contact'
import Footer from './components/5-Footer/Footer'
import Skills from './components/Skills/Skills'
import Location from './components/Location/Location'
import Loading from './components/Loading/Loading'

function App() {
  const [scrool, setScrool] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });

      const hiddenElements = document.querySelectorAll('.hidden');
      const hiddenElementss = document.querySelectorAll('.hiddens');

      hiddenElements.forEach((el) => observer.observe(el));
      hiddenElementss.forEach((els) => observer.observe(els));

      return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
        hiddenElementss.forEach((els) => observer.unobserve(els));
      };
    }
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      setScrool(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="line" />
      <Skills />
      <div className="line" />
      <Main />
      <div className="line" />
      <Location />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />
      <a href="#">
        <button
          style={{ opacity: scrool ? 1 : 0, transition: '0.3s' }}
          className="scrool2top icon-arrow-up"
        ></button>
      </a>
    </div>
  );
}

export default App;

