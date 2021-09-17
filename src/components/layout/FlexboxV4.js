import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default props => {
    return(
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}
const style = StyleSheet.create({
    FlexV4:{
        flexGrow:1,
        width: 100,
        backgroundColor: '#252323',
    },
    V0:{
        backgroundColor: '#593C8F',
        height: 0,
    },
    V1:{
        backgroundColor: '#17BEBB',
        flexGrow:9,
    },
    V2:{
        backgroundColor: '#F1A61B',
        flexGrow:1,
    }
})