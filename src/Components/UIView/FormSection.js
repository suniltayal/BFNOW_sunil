import React, { Component } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Notification from '../Notification/Notification';
import './FormSection.css';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            showNotification: true,
            notificationMessage: 'Welcome to the BigFix team!',
        };
    }

    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    };

    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    };

    handleSubmit = () => {
        const { firstName, lastName } = this.state;
        const message = `Form submitted with data - First Name: ${firstName}, Last Name: ${lastName}`;
        console.log(message)
        this.setState({
            showNotification: false, 
        });

        setTimeout(() => {
            this.setState({
                showNotification: true,
                notificationMessage: message,
            });
        }, 1000);
    };

    handleCloseNotification = () => {
        this.setState({ showNotification: false });
    };

    render() {
        const { firstName, lastName, showNotification, notificationMessage } = this.state;

        return (
            <div className="form-section">
                <form>
                    <Box display="flex" alignItems="center">
                        <TextField
                            label="First Name"
                            variant="outlined"
                            value={firstName}
                            onChange={this.handleFirstNameChange}
                            className="form-field"
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            value={lastName}
                            onChange={this.handleLastNameChange}
                            className="form-field"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit}
                            className="submit-button"
                        >
                            Submit
                        </Button>
                    </Box>
                </form>

                {showNotification && (
                    <Notification
                        open={showNotification}
                        message={notificationMessage}
                        handleClose={this.handleCloseNotification}
                        autoHide={true}
                    />
                )}
            </div>
        );
    }
}

export default FormSection;
