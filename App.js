import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Today from './components/Today';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
export default function App() {

  const [weather, setWeather] = useState({})

  const latitude = 50.433333
  const longitude = 2.833333

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=bf0439822962000f841efcbf28142ab8`)
      .then(res => {
        setWeather(res.data);
      })
  }, [])



  if (weather.current) {
    const currentWeather = weather.current;
    return (
      <View style={styles.container}>
        <Today current={currentWeather} />
      </View>
    );
  } else {
    console.log('test')
    return <AppLoading />
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
