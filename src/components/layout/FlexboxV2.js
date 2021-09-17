import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV2}>
            <Quadrado cor='#17BEBB'/>
            <Quadrado cor='#F1A61B'/>
            <Quadrado cor='#593C8F'/>
            <Quadrado cor='#DB5461'/>
            <Quadrado cor='#84B26B'/>
        </View>
    )
}
const style = StyleSheet.create({
    FlexV2:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252323',
        flexGrow: 1
    }
})