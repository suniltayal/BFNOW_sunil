import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SvgIcon from '@mui/material/SvgIcon';
import {DirectionsSubway} from "@mui/icons-material";
import { DesktopWindows, DeveloperBoard, DeviceUnknown, DialerSip } from "@mui/icons-material";
import './Header.css';

function Header({selectedIcon}) {
    const iconComponents = {
        DesktopWindows: <DesktopWindows />,
        DeveloperBoard: <DeveloperBoard />,
        DeviceUnknown: <DeviceUnknown />,
        DialerSip: <DialerSip />,
      };
    return (
        <AppBar position="static">
            <Toolbar>
                <div className="logo-section" style={{ flexGrow: 1 }}>
                    {/* <SvgIcon>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-11h2v5h-2zm0 6h2v2h-2z" />
                    </SvgIcon> */}
                    <DirectionsSubway fontSize="large"/>
                    <Typography variant="h6">
                        Subway Junc
                    </Typography>
                </div>
                {selectedIcon && (
                    <IconButton size="large" color="inherit" edge="end" className='topIcon'>
                        {iconComponents[selectedIcon]}
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
