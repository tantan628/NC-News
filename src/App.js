import './App.css';
import '@fontsource/roboto/300.css';
import Home from './components/Home';

import { useEffect } from 'react';
import * as api from './api';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';

function App() {
  const [user, setUser] = useState('');
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const topicsData = await api.getTopics();
        setTopics(topicsData);
    }
    getData();
  }, []);

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home topics={topics} filterByTopic="" />} key="All Topics"/>
          {topics.map((topic) => {
            return (
              <Route path={`/${topic.slug}`} element={<Home topics={topics} filterByTopic={topic.slug} />} key={topic.slug}/>
            )
          })}
        </Routes>
      </div>
    </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
