import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { Inputs } from '../Input/Inputs';
import { FormControls } from '../FormControls/FormControls';
import { SettingsContext } from '../../context/SettingsContext';


export const EthernetSettings = ({ nameH }) => {

  const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
    });
  const StyledRadio = props => {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  const context = useContext( SettingsContext )
  const {  showDisabledIP, hideDisabledIP, showDisabledDNS, hideDisabledDNS, showError, showNotError, disabledIP, disabledDNS, error, id } = context;

  const onChangeInput = ( event, placeholder ) => {

    if( event.target.value !== placeholder ) {
      showError()
    } else {
      showNotError()
    }

  }
       

  return (
        <div style={{ 
          padding: '10px', 
          width: '610px',
        }}>

          <h1><strong>{ nameH }</strong></h1>
            
          <FormControl component="fieldset">
            <RadioGroup defaultValue='IP address' name="customized-radios">
                
                <FormControls
                  setDisabled={ showDisabledIP }
                  value={ 'IP address' }
                  label={ 'Obtain an IP address automatically (DHCP/BootP)' } 
                  control={<StyledRadio />} 
                />

                <FormControls 
                  setDisabled={ hideDisabledIP }
                  value={ '' }
                  label={ 'Use the following IP address' } 
                  control={<StyledRadio />} 
                />  

            </RadioGroup>
          </FormControl>
          <>
            <Inputs 
              name={`IP address:     `} 
              important={ '*' }
              disabled={ disabledIP }
              id={ `${Math.random(id)} ` }
              onChangeInput={ onChangeInput }
              error={ error }
              placeholder={ '1' }
            />

            <Inputs 
              name={`Subnet Mask:     `} 
              important={ '*' }
              disabled={ disabledIP }
              id={ `${Math.random(id)} ` } 
              onChangeInput={ onChangeInput }
              error={ error }
              placeholder={ '2' }
            />

            <Inputs 
              name={`Default Gateway:        `} 
              disabled={ disabledIP }
              id={ `${Math.random(id)} ` }
              onChangeInput={ onChangeInput }
              error={ error }
              placeholder={ '3' }
            />
          </>

          <FormControl component="fieldset">
            <RadioGroup defaultValue='DNS server' name="customized-radios">
              
              <FormControls 
                setDisabled={ showDisabledDNS }
                value={ 'DNS server' } 
                label={ 'Obtain an DNS server automatically (DHCP/BootP)' }
              />

              <FormControls 
                setDisabled={ hideDisabledDNS }
                value=''
                label={ `Use the following DNS server` }
              />

            </RadioGroup>
          </FormControl>
          <>
            <Inputs 
            name={'Preferred DNS server:     '} 
            important={ '*' }
            disabled={ disabledDNS }
            id={ `${Math.random(id)} ` }
            onChangeInput={ onChangeInput }
            error={ error }
            placeholder={ '4' }
            />

            <Inputs 
              name={'Alternative DNS server:     '} 
              disabled={ disabledDNS } 
              id={ `${Math.random(id)} ` }
              onChangeInput={ onChangeInput }
              error={ error }
              placeholder={ '5' }
            />
          </>

        </div>
  )
}





// <>
//                     <FormControls 
//                       setDisabledIP={ setDisabledIP }
//                       value={'IP address'} 
//                       label={ `Obtain an IP address automatically (DHCP/BootP)` }
//                       disabledWiFi={ disabledWiFi }
//                     />

//                     <FormControls 
//                       setDisabledIP={ setDisabledIP }
//                       value=''
//                       label={ `Use the following IP address` }
//                       disabledWiFi={ disabledWiFi }
//                     />

                    // <Inputs 
                    //     name={`IP address:     `} 
                    //     important={ '*' }
                    //     disabled={ disabledIP } 
                    //     // onChangeState={ onChangeState }
                    //     // error={ error.error }
                    //     placeholder={ '192.168.5.13' }
                    //     disabledWiFi={ disabledWiFi }
                    // />
                    // <Inputs 
                    //     name={`Subnet Mask:     `} 
                    //     important={ '*' }
                    //     disabled={ disabledIP } 
                    //     // onChangeState={ onChangeState }
                    //     // error={ error.error }
                    //     placeholder={ '255.255.255.0' }
                    // />
                    // <Inputs 
                    //     name={`Default Gateway:        `} 
                    //     disabled={ disabledIP }
                    //     // onChangeState={ onChangeState }
                    //     // error={ error.error }
                    //     placeholder={ '192.168.0.1' } 
                    // />
//                 </>

//                 <>
                  // <FormControls 
                  //   setDisabledIP={ setDisabledDNS }
                  //   value={ 'DNS server' } 
                  //   label={ `Obtain an DNS server automatically (DHCP/BootP)` }
                  // />

                  // <FormControls 
                  //   setDisabledIP={ setDisabledDNS }
                  //   value=''
                  //   label={ `Use the following DNS server` }
                  // />
              
                  // <Inputs 
                  //   name={'Preferred DNS server:     '} 
                  //   important={ '*' }
                  //   disabled={ disabledDNS }
                  //   // onChangeState={ onChangeState }
                  //   // error={ error.error }
                  //   placeholder={ '192.168.0.1' }
                  // />

                  // <Inputs 
                  //   name={'Alternative DNS server:     '} 
                  //   disabled={ disabledDNS } 
                  //   // onChangeState={ onChangeState }
                  //   // error={ error.error }
                  //   placeholder={ '192.168.0.1' }
                  // />
//                 </>