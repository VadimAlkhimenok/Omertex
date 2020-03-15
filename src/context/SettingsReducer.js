import { 
    SHOW_IP, 
    SHOW_DNS, 
    HIDE_IP, 
    HIDE_DNS,
    SHOW_WIFI,
    SHOW_WIRELESS,
    ERROR,
    NOT_ERROR, } from './types';

export const handlers = {
    [SHOW_IP]: state => ({ ...state, disabledIP: true }),
    [HIDE_IP]: state => ({ ...state, disabledIP: false }),
    [SHOW_DNS]: state => ({ ...state, disabledDNS: true }),
    [HIDE_DNS]: state => ({ ...state, disabledDNS: false }),
    [SHOW_WIFI]: state => ({ ...state, disabledWiFi: !state.disabledWiFi }),
    [SHOW_WIRELESS]: state => ({ ...state, disabledWireless: !state.disabledWireless }),
    [ERROR]: state => ({ ...state, error: true }),
    [NOT_ERROR]: state => ({ ...state, error: false }),
    DEFAULT: state => state,
}

export const SettingsReducer = ( state, action ) => {

    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler( state, action );    

}
