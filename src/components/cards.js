import React, {useState} from 'react';
import Superselect from './superselect';
const { EuiCard, EuiFlexItem, EuiFlexGroup, EuiIcon } = require("@elastic/eui");

const Cards = () => {
    const [value, setValue] = useState('hour');

    const TestData =  [{
        "dt": 1594335600,
        "temp": 304.89,
        "feels_like": 307.72,
        "pressure": 1013,
        "humidity": 59,
        "dew_point": 295.89,
        "clouds": 40,
        "wind_speed": 3.23,
        "wind_deg": 198,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1594339200,
        "temp": 304.39,
        "feels_like": 308.39,
        "pressure": 1012,
        "humidity": 67,
        "dew_point": 297.53,
        "clouds": 47,
        "wind_speed": 2.91,
        "wind_deg": 206,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "13d"
          }
        ]
      },
      {
        "dt": 1594342800,
        "temp": 302.41,
        "feels_like": 306.78,
        "pressure": 1011,
        "humidity": 75,
        "dew_point": 297.52,
        "clouds": 87,
        "wind_speed": 2.37,
        "wind_deg": 215,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "02d"
          }
        ]
      },
      {
        "dt": 1594346400,
        "temp": 300.67,
        "feels_like": 305.24,
        "pressure": 1011,
        "humidity": 79,
        "dew_point": 296.7,
        "clouds": 96,
        "wind_speed": 1.4,
        "wind_deg": 222,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "11n"
          }
        ]
      },
      {
        "dt": 1594350000,
        "temp": 300.1,
        "feels_like": 304.53,
        "pressure": 1012,
        "humidity": 81,
        "dew_point": 296.56,
        "clouds": 99,
        "wind_speed": 1.49,
        "wind_deg": 204,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "09n"
          }
        ]
      },
      
    ];

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

const hourNodes = TestData.map( (data,index) => {
    let icon = checkIcon(data.weather[0].icon)
    console.log(icon);
    return (
    <EuiFlexItem key={index}>
        <EuiCard
            title={`${(Math.round((data.temp-273.15) * 100) / 100).toFixed(1)} ℃`}
            icon={<EuiIcon size="original" type={require(`${icon}`)} />}
            description="Monday"
            onClick={() => window.alert('Card clicked')}
            style={{boxShadow:'0 6px 8px 0 rgba(77,161,192,1)'}}
        >
        </EuiCard>
    </EuiFlexItem>
    )
}
);

console.log(hourNodes);
console.log(Superselect.value);

if (value==='hour') {
return  (
    <div>
    <Superselect value={value} setValue={setValue}></Superselect>
    <EuiFlexGroup justifyContent="center" alignItems="center">{hourNodes}</EuiFlexGroup>
    </div>
)
}
if (value==='day') {
    return  (
        <div>
            <Superselect value={value} setValue={setValue}></Superselect>
        Hello
        </div>
    )
}
if (value==='minute') {
    return  (
        <div>
            <Superselect value={value} setValue={setValue}></Superselect>
        Hello
        </div>
    )
}
}
// }
// if (value==='hour') {
//     return  (
//         <div>
//         <Superselect value={value} setValue={setValue}></Superselect>
//         <EuiFlexGroup justifyContent="center" alignItems="center">{hourNodes}</EuiFlexGroup>
//         </div>
//     )
//     }
// }

export default Cards;