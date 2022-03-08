import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <Box>
            <AppBar position="static">
            <Toolbar>
                <Link to="/">
                <IconButton size="large" aria-label="home">
                    <HomeIcon />
                </IconButton>
                </Link>
                <Typography variant="h1" className="mainTitle">
                Tanis' News App
                </Typography>
            </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;