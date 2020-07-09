import React from 'react';

import '@elastic/eui/dist/eui_theme_dark.css';
import styles from "./App.module.scss";
import { Header } from './components';


import {
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
    EuiCard,
    EuiIcon,
    EuiSpacer,
  } from '@elastic/eui';


const App = () => {
    return (
        <div>

            <Header />
            <EuiSpacer/>
            <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}> 
            <EuiCard
        icon={<EuiIcon size="original" type={require('./cloudy.svg')}/>}
        title={`14 ℃`}
        description="Morning"
        onClick={() => window.alert('Card clicked')}
        style={{maxWidth:'300px',boxShadow:'0 6px 8px 0 rgba(77,161,192,1)', size:'20px'}}
        className="tester"
            />
            <EuiCard
        icon={<EuiIcon size="original" type={require('./cloudy.svg')}/>}
        title={`14 ℃`}
        description="Morning"
        onClick={() => window.alert('Card clicked')}
        style={{maxWidth:'300px',boxShadow:'0 6px 8px 0 rgba(77,161,192,1)', size:'20px'}}
        className="tester"
            />
            </div>
            <img src={require('./cloudy.svg')} />
        </div>
    )

}

export default App;