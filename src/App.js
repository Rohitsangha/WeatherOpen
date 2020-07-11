import React, {useState, useEffect} from 'react';

import '@elastic/eui/dist/eui_theme_dark.css';
import styles from"./App.module.scss";
import { Header, Cards} from './components';


import {
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
    EuiTitle,
    EuiSpacer,
    EuiFieldSearch,
    EuiForm,
    EuiCallOut
  } from '@elastic/eui';


const App = () => {

    //State Hooks
    const [newInput, setNewInput] = useState('') 
    const [weatherVal, setWV] = useState({}) 
    const [warningMessage, setWM] = useState(false) 

    //Update form values using state
    const handleInputChange = (event) => {
        setNewInput(event.target.value);
    }
    
    let temp = 'p2EwRPYiwNECZZzmSaFK6NSBIZOM9evd';
    let temp1 = '2513db73f3cc78a8fa11d3b7c1f28099';

    //Function that fetches geocoding api then uses that data to fetch openweather api when form is submitted.
    const searchApi = (event) => {
        event.preventDefault();
        setWV(
        fetch(`https://open.mapquestapi.com/geocoding/v1/address?key=${temp}&location=${newInput}`)
        .then(res => res.json())
        .then(data => 
            {
                if(data.results[0].locations.length===0) {
                    throw new Error();
                }
                else{
                    return data.results[0].locations[0].latLng
                }
            })
            .then(data => fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lng}&exclude=minutely&appid=${temp1}`))
            .then(res => res.json())
            .then(data => {setWV(data)})
            .catch(error => {
                setWM(true)
                setNewInput('')
                setTimeout(()=>setWM(false),3000)
            })
        )
    }



    return (
        <>
        <Header />
        <div className={styles.main}>


            <EuiSpacer/>
            {warningMessage ? ( 
            <EuiCallOut title="Unvalid location. Please try again." color="danger" iconType="alert" style={{maxWidth:'450px', margin:'auto'}}>
            </EuiCallOut>
            ) : (<></>)}


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

            {Object.keys(weatherVal).length === 0 ? (
                <div></div>
            ): (

            <div className={styles.cards}>
            <Cards weather={weatherVal}></Cards>
            </div>

            )}

           </div>
           </>

    )

}

export default App;