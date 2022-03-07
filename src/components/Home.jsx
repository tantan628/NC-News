import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';
import UserLogIn from './UserLogIn';

const Home = ({ topics, filterByTopic }) => {
    return (
        <div className="App">
            <UserLogIn />
            <Header />
            <MainSection topics={topics} filterByTopic={filterByTopic} />
            <Footer />
        </div>
    )
};

export default Home;