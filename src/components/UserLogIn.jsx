//IMPORTS - React
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../contexts/UserContext';

//IMPORTS - Mui
import { Box, Button, InputLabel, Modal, TextField, Typography } from '@mui/material';

//IMPORTS - Api
import * as api from '../api';

//-----------COMPONENT-----------
const UserLogIn = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('testing');
    const [errorMessage, setErrorMessage] = useState('');
    const { user, setUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const getData = async () => {
            const usersData = await api.getUsers();
            setUsers(usersData);
        }
        getData();
        setUser('testing');
    }, [setUser]);

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const logInAs = (event) => {
        event.preventDefault()
        const enteredUsername = event.target[0].value;
        const userInfo = users.find((user) => {
            return user.username === enteredUsername;
        });
        if(userInfo) {
            setUser(() => {
                return enteredUsername;
            });
            handleClose()
        } else {
            setErrorMessage(`Sorry, but it looks like we can't find that username.`)
        }
    }

    return (
        <section>
            <Button color="inherit" variant="outlined" size="small" onClick={handleOpen}>Log In</Button>
            <Typography noWrap variant="subtitle1">Hello, {user}</Typography>
            <Modal open={open} onClose={handleClose}>
                <Box className="modal-form-container">
                    <form onSubmit={logInAs}>
                        <InputLabel id="username-input">Username:</InputLabel>
                        <TextField variant="outlined" label="Username" labelid="username-input" value={username} onChange={handleChange} />
                        <br />
                        <Button variant="contained" type="submit">Submit</Button>
                    </form>
                    <Typography variant="subtitle2">{errorMessage}</Typography>
                </Box>
            </Modal>
        </section>
    )
};

export default UserLogIn;