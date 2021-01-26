import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Today from './components/Today';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import Day from './components/Day';
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

  const showMenu = () => {
    console.log('hey')
  }

  if (weather.current) {
    const currentWeather = weather.current;

    const nextDaysJSX = weather.daily.map(
      day => {
        return <Day key={day.dt} day={day}/>
      }
    )

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.todayView}>
          <Today current={currentWeather} />
        </View>
        <View style={styles.dayListView}>
          <ScrollView >
            {nextDaysJSX}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  } else {
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
  todayView: {
    flex: 2,
    backgroundColor: "#2b53e3",
    width: "100%",
  },
  dayListView: {
    flex: 6,
    width: "100%",
  }
});
