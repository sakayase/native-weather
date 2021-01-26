import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Moment from 'moment';

export default function Day(day) {

    const icon = day.day.weather[0].icon;

    const unixTime = day.day.dt;
    const date = new Date(unixTime * 1000);
    const dayDate = Moment(date).format('ddd MMM D YYYY')
    console.log(dayDate);

    const weather = day.day.weather[0].main;

    const tempMax = day.day.temp.max;
    const tempMin = day.day.temp.min;

    return (
        <View style={styles.dayView}>
            <Image
                    style={styles.weatherIcon}
                    source={
                        { uri: "https://www.openweathermap.org/img/wn/" + icon + "@4x.png" }
                    } />
            <View style={styles.dateWeather}>
                <Text style={styles.textBig}> {dayDate} </Text>
                <Text style={styles.textLittle}> {weather} </Text>
            </View>
            <View style={styles.tempMaxMin}>
                <Text style={styles.textBig}> {tempMax}°C </Text>
                <Text style={styles.textLittle}> {tempMin}°C </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dayView: {
        backgroundColor: '#FFF',
        borderColor: "lightblue",
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: "row",
    },
    weatherIcon: {
        height: 75,
        width: 75,
    },
    dateWeather: {
        flex: 1,
        justifyContent: "center",
    },
    tempMaxMin: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: 20,
    },
    textLittle: {
        fontSize: 15,
    },
    textBig: {
        fontSize: 20,
    }
})
