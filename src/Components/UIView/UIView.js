import React, { useState } from 'react';
import HeaderSection from './HeaderSection';
import FormSection from './FormSection';
import IconSection from './IconSection';
import './UIView.css';

function UIView({ showNotification, setSelectedIcon }) {
    
    return (
        <div className='container'>
            <HeaderSection  className='header-section' />
            <IconSection setSelectedIcon={setSelectedIcon} />
            <FormSection isInitialLoad={true} className='form-section' />
        </div>
    );
}

export default UIView;
