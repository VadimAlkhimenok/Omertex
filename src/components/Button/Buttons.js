import React from 'react';
import Button from '@material-ui/core/Button';

export const Buttons = ({ name, variant }) => (
    <>
        <Button 
            style={{ 
                marginRight: '20px', 
                borderRadius: '20px', 
                width: '100px' 
            }}
            variant= { variant }
            color="primary" 
        >
            { name }
        </Button>
    </>
);