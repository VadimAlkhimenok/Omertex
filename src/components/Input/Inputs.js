import React from 'react';
import Input from '@material-ui/core/Input';

export const Inputs = ({ name, important, disabled, id, error, onChangeInput, placeholder }) => {

  const styles = {
    one: {
      display: 'flex', 
      justifyContent: 'flex-end', 
      alignItems: 'center'
    },
    two: {
      display: 'flex', 
      justifyContent: 'flex-end', 
      alignItems: 'center',
      opacity: .5,
    }
  }

  return (
  
    <div style={ disabled ? styles.two : styles.one }>
      
      <>
        <label 
          style={{ marginRight: '10px' }}
          htmlFor='disabled' 
        >
          { name }
          <span style={{ color: 'red' }}>{ important }</span>
          <Input 
            style={{ width: '250px' }} 
            id={ id } 
            disabled={ disabled }
            onChange={ event => onChangeInput(event, placeholder) }
            error={ error }
            placeholder={ placeholder }
          />
        </label>
      </>
        
    </div>
    
  )
};

