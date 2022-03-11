//IMPORTS - React
import { useNavigate } from 'react-router-dom';

//IMPORTS - Mui
import { Button, Typography } from "@mui/material";

//-----------COMPONENT-----------
const ErrorComponent = ({ error:{ err }, setError }) => {
    const msg = err.response.data.msg;
    const status = err.request.status;

    const navigate = useNavigate()
    const backToHome = () => {
        setError(null);
        navigate('/');
    };

    return (
        <section className="error-message-container">
            <Typography variant="h3">
                Error
            </Typography>
            <Typography>
                Status: {status}
            </Typography>
            <Typography>
                {msg}
            </Typography>
            <br />
            <Button variant="contained" onClick={backToHome} color="success">Back to Safety</Button>
        </section>
    )
};

export default ErrorComponent;