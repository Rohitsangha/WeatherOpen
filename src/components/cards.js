import React, {useState} from 'react';
import Superselect from './superselect';
const { EuiCard, EuiFlexItem, EuiFlexGroup, EuiIcon } = require("@elastic/eui");

const Cards = ({weather}) => {
    const [value, setValue] = useState('current');

    const currentData = weather.current;
    const hourData = weather.hourly.slice(0,5);
    const weekData = weather.daily.slice(0,5);

const checkIcon = (i) => {
    switch(i) {
        case "01d": return './assets/animated/day.svg'
        case "01n": return './assets/animated/night.svg'
        case "02d": return './assets/animated/cloudy-day-3.svg'
        case "02n": return './assets/animated/cloudy-night-3.svg'
        case "03d": return './assets/animated/cloudy.svg'
        case "03n": return './assets/animated/cloudy.svg'
        case "04d": return './assets/animated/cloudy.svg'
        case "04n": return './assets/animated/cloudy.svg'
        case "09d": return './assets/animated/rainy-6.svg'
        case "09n": return './assets/animated/rainy-6.svg'
        case "10d": return './assets/animated/rainy-4.svg'
        case "10n": return './assets/animated/rainy-4.svg'
        case "11d": return './assets/animated/thunder.svg'
        case "11n": return './assets/animated/thunder.svg'
        case "13d": return './assets/animated/snowy-6.svg'
        case "13n": return './assets/animated/snowy-6.svg'
        case "50d": return './assets/animated/rainy-7.svg'
        case "50n": return './assets/animated/rainy-7.svg'  
        default: return './assets/animated/day.svg'
    }
}

const unixTimeConverter = (dt) => {
  let time = dt;
  let date = new Date(time * 1000)

  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();

  return (hours + ':' + minutes.substr(-2))

}

const unixDayConverter = (dt) => {
  let date = new Date(dt*1000);
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return days[date.getDay()]
}

const hourNodes = hourData.map((data,index) => {
    let icon = checkIcon(data.weather[0].icon)
    return (
    <EuiFlexItem key={index}>
        <EuiCard
            title={`${(Math.round((data.temp-273.15) * 100) / 100).toFixed(0)} ℃`}
            icon={<EuiIcon size="original" type={require(`${icon}`)} />}
            description={`${unixTimeConverter(data.dt)}`}
            onClick={() => {}}
            style={{boxShadow:'0 6px 8px 0 rgba(77,161,192,1)'}}
        >
        </EuiCard>
    </EuiFlexItem>
    )
});


const weekNodes = weekData.map((data,index) => {
  let icon = checkIcon(data.weather[0].icon)
  return (
  <EuiFlexItem key={index}>
      <EuiCard
          title={`${(Math.round((data.temp.max-273.15) * 100) / 100).toFixed(0)}/${(Math.round((data.temp.min-273.15) * 100) / 100).toFixed(0)} ℃`}
          icon={<EuiIcon size="original" type={require(`${icon}`)} />}
          description={`${unixDayConverter(data.dt)}`}
          onClick={() => {}}
          style={{boxShadow:'0 6px 8px 0 rgba(77,161,192,1)'}}
      >
      </EuiCard>
  </EuiFlexItem>
  )
});


const currentNode = (

    <EuiFlexItem key={"current"}>
        <EuiCard
            title={`${(Math.round((currentData.temp-273.15) * 100) / 100).toFixed(0)} ℃`}
            icon={<EuiIcon size="original" type={require(`${checkIcon(currentData.weather[0].icon)}`)} />}
            description={`Feels Like ${(Math.round((currentData.feels_like-273.15) * 100) / 100).toFixed(1)} ℃`}
            onClick={() => {}}
            style={{boxShadow:'0 6px 8px 0 rgba(77,161,192,1)'}}
        >
        </EuiCard>
    </EuiFlexItem>
  )



if (value==='hour') {
return  (
    <div>
       <EuiFlexGroup style={{maxWidth: '450px', margin: 'auto'}}>
         <EuiFlexItem >
          <Superselect value={value} setValue={setValue}></Superselect>
          </EuiFlexItem>
       </EuiFlexGroup>
    <EuiFlexGroup justifyContent="center" alignItems="center">{hourNodes}</EuiFlexGroup>
    </div>
)
}
if (value==='day') {
    return  (
      <div>
      <EuiFlexGroup style={{maxWidth: '450px', margin: 'auto'}}>
        <EuiFlexItem >
         <Superselect value={value} setValue={setValue}></Superselect>
         </EuiFlexItem>
      </EuiFlexGroup>
   <EuiFlexGroup justifyContent="center" alignItems="center">{weekNodes}</EuiFlexGroup>
   </div>
    )
}
if (value==='current') {
    return  (
      <div>
      <EuiFlexGroup style={{maxWidth: '450px', margin: 'auto'}}>
        <EuiFlexItem >
         <Superselect value={value} setValue={setValue}></Superselect>
         </EuiFlexItem>
      </EuiFlexGroup>
   <EuiFlexGroup style={{width:'300px', margin:'auto'}} justifyContent="center" alignItems="center">{currentNode}</EuiFlexGroup>
   </div>
    )
}
}

export default Cards;
