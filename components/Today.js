import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Today(current) {

    const temp = current.current.temp
    console.log(current.current.temp)
    
    const unixTime = current.current.dt;
    const date = new Date(unixTime * 1000);
    const day = date.toLocaleString("fr-FR", { weekday: 'long' })
    
    

    return (
        <View>
            <Text>
                Date : {day} 
            </Text>
            <Text>
                Temperature : {temp}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})
