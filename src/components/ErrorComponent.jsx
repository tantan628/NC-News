import { Box, Typography } from "@mui/material";

const ErrorComponent = ({ error:{ err } }) => {
    const msg = err.response.data.msg;
    const status = err.request.status;
    console.log(msg)
    return (
        <Box>
            <Typography variant="h3">
                Error
            </Typography>
            <Typography>
                Status: {status}
            </Typography>
            <Typography>
                {msg}
            </Typography>
            <div className="divider-below-errors"/>
        </Box>
    )
};

export default ErrorComponent;