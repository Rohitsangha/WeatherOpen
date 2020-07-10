import React, {useState, useEffect} from 'react';

import '@elastic/eui/dist/eui_theme_dark.css';
import styles from"./App.module.scss";
import { Header, Cards } from './components';


import {
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
    EuiCard,
    EuiIcon,
    EuiSpacer,
    EuiFieldSearch,
    EuiForm,
    EuiCallOut
  } from '@elastic/eui';


const App = () => {
    const [newInput, setNewInput] = useState('') 

    const handleInputChange = (event) => {
        setNewInput(event.target.value);
    }

    const searchApi = (event) => {
        event.preventDefault();
        alert(newInput);
    }

    // fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely&appid=2513db73f3cc78a8fa11d3b7c1f28099').then(res=>{console.log(res.json())});

    return (
        <div>

            <Header />

            <EuiSpacer/>
            <EuiCallOut title="Search input not valid. Please try again." color="danger" iconType="alert" style={{maxWidth:'450px', margin:'auto'}}>
            </EuiCallOut>


            <EuiForm component="form" onSubmit={searchApi}>
            <EuiFlexGroup className={styles.flexC}>
                <EuiFlexItem>
                    <EuiFieldSearch
                        placeholder="Search For A City"
                        fullWidth
                        value={newInput}
                        onChange={handleInputChange}
                    />
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                    <EuiButton type="submit">Search</EuiButton>
                </EuiFlexItem>
            </EuiFlexGroup>
            </EuiForm>

            <EuiSpacer/>

            <Cards></Cards>
            
           </div>

            

    //      <EuiFlexGroup>
    //      <EuiFlexItem>
    //        <EuiFieldSearch
    //          placeholder="Search..."
    //          fullWidth
    //          aria-label="An example of search with fullWidth"
    //        />
    //      </EuiFlexItem>
    //      <EuiFlexItem grow={false}>
    //        <EuiButton>Search</EuiButton>
    //      </EuiFlexItem>
    //    </EuiFlexGroup>
    )

}

export default App;