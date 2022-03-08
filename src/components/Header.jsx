import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import UserLogIn from './UserLogIn';

const Header = () => {

    return (
        <Box>
            <AppBar position="fixed">
            <Toolbar>
                <Link to="/">
                <IconButton size="large" aria-label="home">
                    <HomeIcon />
                </IconButton>
                </Link>
                <Typography variant="h1" className="mainTitle">
                Tanis' News App
                </Typography>
                <UserLogIn />
            </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;