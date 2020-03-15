import React from 'react';
import { EthernetSettings } from './EthernetSettings/EthernetSettings';
import { WirelessSettings } from './WirelessSettings/WirelessSettings';
import { Buttons } from './Button/Buttons';


export const Main = () => (
  
  <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          marginTop: '20px',
          border: '1px solid grey',
          borderRadius: '20px',
          boxShadow: '0 0 50px grey' 
        }}
  >

    <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '1228px' 
          }}
    >
      <EthernetSettings nameH={ 'Ethernet settings' } />
      <WirelessSettings nameH={ 'Wireless settings' } />
    </div>

    <div style={{ 
            padding: '15px',
            borderTop: '1px solid grey' 
          }}
    >
      <Buttons name={ 'Save' } variant={ 'contained' } />
      <Buttons name={ 'Cancel' } variant={ 'outlined' } />
    </div>

  </div>

);
