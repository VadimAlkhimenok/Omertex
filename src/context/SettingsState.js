import React, { useReducer } from 'react';
import { SettingsContext } from './SettingsContext';
import { SettingsReducer } from './SettingsReducer';
import { SHOW_IP, SHOW_DNS, HIDE_IP, HIDE_DNS, SHOW_WIFI, SHOW_WIRELESS, ERROR, NOT_ERROR } from './types';

export const SettingsState = ({ children }) => {

    const initialState = {
        disabledIP: true,
        disabledDNS: true,
        disabledWiFi: false,
        disabledWireless: false,
        error: false,
        id: 100,
    };

    const [state, dispatch] = useReducer( SettingsReducer, initialState );
    const { disabledDNS, disabledIP, disabledWiFi, disabledWireless, error, id } = state

    const showDisabledIP = () => dispatch({ type: SHOW_IP });
    const hideDisabledIP = () => dispatch({ type: HIDE_IP });
    const showDisabledDNS = () => dispatch({ type: SHOW_DNS });
    const hideDisabledDNS = () => dispatch({ type: HIDE_DNS });
    const showDisabledWiFi = () => dispatch({ type: SHOW_WIFI }); 
    const showDisabledWireless = () => dispatch({ type: SHOW_WIRELESS }); 
    const showError = () => dispatch({ type: ERROR }); 
    const showNotError = () => dispatch({ type: NOT_ERROR }); 
    
    return (
        <SettingsContext.Provider value={{
            showDisabledIP, hideDisabledIP, showDisabledDNS, 
            hideDisabledDNS, showDisabledWiFi, showDisabledWireless, showError,
            showNotError, disabledIP, disabledDNS, disabledWiFi, disabledWireless, error, id
        }}>
            { children }
        </SettingsContext.Provider>
    )
}