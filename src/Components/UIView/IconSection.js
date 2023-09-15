import React, { useState } from 'react';
import { Grid, Paper, IconButton } from '@mui/material';
import {
    DesktopWindows,
    DeveloperBoard,
    DeviceUnknown,
    DialerSip,
} from "@mui/icons-material";
import './IconSection.css'; // You can create a CSS file for styling
import Notification from '../Notification/Notification';

function IconSection({setSelectedIcon }) {
    const [notificationMessage, setNotificationMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);
   
    const handleIconClick = (iconName) => {
        setNotificationMessage(`Icon ${iconName} is clicked.`);
        setShowNotification(true);
        setSelectedIcon (iconName);
    };

    return (
        <div className="icon-section">
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                    <Paper className="icon-paper">
                        <IconButton
                            size="large"
                            color="primary"
                            className="icon-button"
                            onClick={() => handleIconClick('DesktopWindows')}
                        >
                            <DesktopWindows fontSize="large" />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className="icon-paper">
                        <IconButton
                            size="large"
                            color="primary"
                            className="icon-button"
                            onClick={() => handleIconClick('DeveloperBoard')}
                        >
                            <DeveloperBoard fontSize="large" />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className="icon-paper">
                        <IconButton 
                            size="large"
                            color="primary"
                            className="icon-button"
                            onClick={() => handleIconClick('DeviceUnknown')}
                        >
                            <DeviceUnknown fontSize="large" />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className="icon-paper">
                        <IconButton
                            size="large"
                            color="primary"
                            className="icon-button"
                            onClick={() => handleIconClick('DialerSip')}
                        >
                            <DialerSip fontSize="large" />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
            {showNotification && (
                <Notification
                    open={showNotification}
                    message={notificationMessage}
                    handleClose={() => setShowNotification(false)}
                    autoHide={true}
                />
            )}
        </div>
    );
}

export default IconSection;
