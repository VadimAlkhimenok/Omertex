import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const Checkboxs = ({ setDisabled, checked }) => {

    return (
        <Checkbox
            checked={ checked }
            value="secondary"
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            onClick={ () => setDisabled() }
        />
    )
}