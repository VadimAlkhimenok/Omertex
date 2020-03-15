import React from 'react';
import Container from '@material-ui/core/Container';
import { Main } from './components/Main';
import { SettingsState } from './context/SettingsState';



export const App = () => (
    <SettingsState>
      <Container maxWidth="lg">
        <Main />
      </Container>
    </SettingsState>
);