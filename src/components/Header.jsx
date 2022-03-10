import { AppBar, Toolbar, Typography, Box, IconButton, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import UserLogIn from './UserLogIn';

const Header = () => {

    return (
        <Box>
            <AppBar position="fixed">
            <Toolbar>
                <Grid container>
                    <Grid item xs={1}>
                    <Link to="/">
                    <IconButton size="large" aria-label="home">
                        <HomeIcon />
                    </IconButton>
                    </Link>
                    </Grid>
                    <Grid item xs={8}>
                    <Typography noWrap variant="h1" className="mainTitle">
                    Tanis' News App
                    </Typography>
                    </Grid>
                    <Grid item xs={3}>
                    <UserLogIn />
                    </Grid>
                </Grid>
            </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;