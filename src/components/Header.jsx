import { Typography } from '@mui/material';

const Header = () => {

    return (
        <section>
            <Typography variant="h1">
                Tanis' News App
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Welcome to Tanis' News App. This site was created as a project on the Northcoders Bootcamp course. The site uses an API also built by myself as a project on the same course.
            </Typography>
        </section>
    )
};

export default Header;