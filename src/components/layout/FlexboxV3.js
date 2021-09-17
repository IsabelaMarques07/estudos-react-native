import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV3}>
            <Quadrado cor='#17BEBB' lado={20}/>
            <Quadrado cor='#F1A61B' lado={30}/>
            <Quadrado cor='#593C8F' lado={40}/>
            <Quadrado cor='#DB5461' lado={50}/>
            <Quadrado cor='#84B26B' lado={60}/>
        </View>
    )
}
const style = StyleSheet.create({
    FlexV3:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 300,
        backgroundColor: '#252323',
    }
})