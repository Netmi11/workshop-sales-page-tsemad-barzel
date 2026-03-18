import React, { useState, useEffect } from 'react';
import WorkshopPage from './components/WorkshopPage';
import ThankYouPage from './components/ThankYouPage';

const App: React.FC = () => {
  const [page, setPage] = useState(() => {
    return window.location.hash === '#thank-you' ? 'thank-you' : 'home';
  });

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash === '#thank-you' ? 'thank-you' : 'home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (page === 'thank-you') return <ThankYouPage />;
  return <WorkshopPage />;
};

export default App;
