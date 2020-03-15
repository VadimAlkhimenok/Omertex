import React, { useContext } from 'react';
import { Inputs } from '../Input/Inputs';
import { Checkboxs } from '../Checkbox/Checkbox';
import { EthernetSettings } from '../EthernetSettings/EthernetSettings';
import { SettingsContext } from '../../context/SettingsContext';


export const WirelessSettings = ({ nameH }) => {

    const context = useContext( SettingsContext )
    const {  showDisabledWiFi, disabledWiFi, showDisabledWireless, disabledWireless } = context; 

    const styles = {
        one: {
            padding: '10px', 
            width: '610px', 
            borderLeft: '1px solid grey',
        },
        two: {
            width: '610px', 
            opacity: '.8',
        }, 
        three: {
            width: '610px', 
        },
      }

    return (
        <div style={ styles.one }>
    
            <h1><strong>{ nameH }</strong></h1>

            <Checkboxs 
                setDisabled={ showDisabledWiFi } 
                checked={ disabledWiFi }
            />Enable WiFi

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Inputs 
                    style={{ width: '300px' }} 
                    name={ 'Wireless Network Name' }
                    disabled={ !disabledWiFi }
                />    
            </div>
            
            <div  style={ disabledWiFi ? styles.three : styles.two }>
                <Checkboxs 
                    setDisabled={ showDisabledWireless } 
                    checked={ disabledWireless }
                />Enable Wireless Security

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Inputs 
                        name={ 'Security Key' } 
                        style={{ width: '300px' }}
                        disabled={ !disabledWireless } 
                    />
                </div>

                <div style={ disabledWireless ? styles.three : styles.two }>
                    <EthernetSettings disabledWiFi={ disabledWiFi.disabledWiFi } />
                </div>
            </div>
        
        </div>
    
    )
}
