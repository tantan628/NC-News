import { useContext, useState } from "react";
import { UserContext } from '../contexts/UserContext';
import { Box, Button, InputLabel, Modal, TextField, Typography } from '@mui/material';

const UserLogIn = () => {
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const logInAs = (event) => {
        event.preventDefault()
        const enteredUsername = event.target[0].value;
        setUser(enteredUsername);
        handleClose()
    }

    return (
        <section>
            <Button color="inherit" variant="outlined" onClick={handleOpen}>Log In</Button>
            <Typography variant="subtitle1">Current User: {user}</Typography>
            <Modal open={open} onClose={handleClose}>
                <Box className="modal-form-container">
                    <form onSubmit={logInAs}>
                        <InputLabel id="username-input">Username:</InputLabel>
                        <TextField variant="outlined" label="Username" labelId="username-input" />
                        <br />
                        <Button variant="contained" type="submit">Submit</Button>
                    </form>
                </Box>
            </Modal>
        </section>
    )
};

export default UserLogIn;