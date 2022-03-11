//IMPORTS - Components
import Home from './components/home-components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import InvalidUrlPage from './components/InvalidUrlPage';
import ArticlePage from './components/article-page-components/ArticlePage';

//IMPORTS - React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';

//IMPORTS - Styling and Mui
import './App.css';
import '@fontsource/roboto/300.css';

import { ThemeProvider } from '@mui/system';
import theme from './theme';
import { Toolbar } from '@mui/material';


//----------APP----------
function App() {
  const [user, setUser] = useState('');

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <Header />
        <Toolbar />
        <section className="main-element-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/:topicSlug" element={<Home />} />
          <Route path="*" element={<InvalidUrlPage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
        </Routes>
        </section>
        <Footer />
      </div>
    </UserContext.Provider>
    </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;