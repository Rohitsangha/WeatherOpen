import React from 'react';
const { EuiCard, EuiFlexItem, EuiFlexGroup, EuiIcon } = require("@elastic/eui");

const Cards = () => {
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
            "icon": "03d"
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
            "icon": "03d"
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
            "icon": "04d"
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
            "icon": "04n"
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
            "icon": "04n"
          }
        ]
      }
    ];

const checkIcon = (i) => {
    switch(i) {
        case "01d": return 'assets/animated/day.svg'
        case "01n": return 'assets/animated/night.svg'
        case "02d": return 
        case "02n": return 
        case "03d": return './assets/animated/day.svg'
        case "03n": return './assets/animated/day.svg'
        case "04d": return './assets/animated/day.svg'
        case "04n": return './assets/animated/night.svg'
        case "09d": return 
        case "09n": return  
        case "10d": return 
        case "10n": return  
        case "11d": return 
        case "11n": return
        case "50d": return 
        case "50n": return    
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
            description="Example of a card's description. Stick to one or two sentences."
            onClick={() => window.alert('Card clicked')}
            style={{maxWidth:'300px',boxShadow:'0 6px 8px 0 rgba(77,161,192,1)'}}
        >
        </EuiCard>
    </EuiFlexItem>
    )
}
);

console.log(hourNodes);

return  (
    <EuiFlexGroup justifyContent="center" alignItems="center">{hourNodes}</EuiFlexGroup>
)
}

export default Cards;