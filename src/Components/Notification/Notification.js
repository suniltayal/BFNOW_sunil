import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './Notification.css';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function Notification({ open, message, handleClose, autoHide }) {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        if (showWelcome && open) {
            setTimeout(() => {
                setShowWelcome(false);
            }, 1000);
        }
    }, [showWelcome, open]);

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={(open && !showWelcome) || (!autoHide && showWelcome)}
            autoHideDuration={autoHide ? 2000 : null}
            onClose={handleClose}
            message={showWelcome ? 'Welcome to BigFix Team!' : message}
            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
            TransitionComponent={SlideTransition}
        />
    );
}

export default Notification;
