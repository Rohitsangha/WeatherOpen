import React from 'react';

import '@elastic/eui/dist/eui_theme_dark.css';
import "./App.module.scss";
import { Header } from './components';


import {
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
  } from '@elastic/eui';


const App = () => {
    return (
        <div>
            <Header />
        <EuiButton
        color="secondary"
        onClick={() => window.alert('Button clicked')}
        >
        Secondary
      </EuiButton>
      </div>
    )

}

export default App;