//IMPORTS - React
import { useNavigate } from 'react-router-dom';

//IMPORTS - Mui
import { Typography, Button } from '@mui/material';

//---------COMPONENT---------
const InvalidUrlPage = () => {
    const navigate = useNavigate()
    const backToHome = () => {
        navigate('/')
    }

    return (
        <section className="error-message-container">
            <Typography variant="h2">Error 404</Typography>
            <Typography variant="body">It looks like that URL doesn't exist, sorry!</Typography>
            <br />
            <Button variant="contained" onClick={backToHome} color="success">Back to Safety</Button>
        </section>
    )
};

export default InvalidUrlPage;