//IMPORTS - Components
import HomeSearch from './HomeSearch';

//IMPORTS - Mui
import { Typography } from '@mui/material';

//-----------COMPONENT-----------
const Home = () => {
    return (
        <div className="App">
            <Typography variant="subtitle1" gutterBottom>
                Welcome to my News App. This site was created as a project on the Northcoders Bootcamp course. The site uses an API also built by myself as a project on the same course.
            </Typography>
            <HomeSearch />
        </div>
    )
};

export default Home;