// App.js
import React, { useState } from 'react';
import './styles.css';
import Header from './Components/Header/Header';
import UIView from './Components/UIView/UIView';
import Notification from './Components/Notification/Notification'; // Import the Notification component

function App() {
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleNotificationClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotificationOpen(false);
    };

    const showNotification = (message) => {
        setNotificationMessage(message);
        setNotificationOpen(true);
    };

    return (
        <div className="App">
            <Header selectedIcon={selectedIcon} />
            <div className="UIView">
              <UIView showNotification={showNotification} setSelectedIcon={setSelectedIcon} />
            </div>
            <Notification
                open={notificationOpen}
                message={notificationMessage}
                handleClose={handleNotificationClose}
                autoHide={true}
            />
        </div>
    );
}

export default App;
