import './App.css';
import '@fontsource/roboto/300.css';
import Home from './components/home-components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import ArticlePage from './components/article-page-components/ArticlePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';

function App() {
  const [user, setUser] = useState('');

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <Header />
        <section className="main-element-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/:topicSlug" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
        </Routes>
        </section>
        <Footer />
      </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
