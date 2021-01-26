import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Moment from 'moment';

export default function Today(current) {

    const temp = current.current.temp // 2 fois current jsp pq ...

    const unixTime = current.current.dt;
    const date = new Date(unixTime * 1000);
    const day = Moment(date).format('ddd MMM D YYYY')

    // toLocaleString ne fonctionne pas sur android
    // const day = date.toLocaleString('fr-FR', {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numéric',
    // })

    const icon = current.current.weather[0].icon;

    const weatherText = current.current.weather[0].main


    return (
        <View style={styles.todayContainer}>
            <View style={styles.todayDateTemp}>
                <Text style={styles.todayDate}>
                    {day}
                </Text>
                <Text style={styles.todayTemperature}>
                    {temp}°C
                </Text>
                <TouchableOpacity style={styles.changeCity} >
                    <Text>Changer de ville</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.todayImageWeather}>
                <Image
                    style={styles.weatherIcon}
                    source={
                        { uri: "https://www.openweathermap.org/img/wn/" + icon + "@4x.png" }
                    } />
                <Text style={styles.todayWeather}>
                    {weatherText}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todayContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    todayDate: {
        alignSelf: "center",
        width: 150,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    todayTemperature: {
        alignSelf: "center",
        width: 150,
        fontSize: 50,
        fontWeight: "bold",
        color: "white",
    },
    weatherIcon: {
        height: 150,
        width: 150,
        alignSelf: "center",
        position: "absolute",
        bottom: 50
    },
    todayWeather: {
        width: 150,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        position: "absolute",
        bottom: 60
    },
    todayDateTemp: {
        flex: 1,
        justifyContent: "center"
    },
    todayImageWeather: {
        flex: 1,
    },
    changeCity: {
        alignSelf: "center",
        width: "auto",
        marginTop: 10,
        padding: 5,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    }
})
