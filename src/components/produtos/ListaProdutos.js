import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos'

export default props => {
    function obterLista(){
        return produtos.map((p, key) => {
            return <Text key={key} >{p.id}) {p.nome} custa R${p.preco}</Text>
        })
    }
    return(
        <>
            <Text style={Estilo.txtG}> Lista de produtos #1 </Text>
            {produtos.map(p => {
                return <Text key={p.id} >{p.id}) {p.nome} custa R${p.preco}</Text>
            })}
            
            <Text style={Estilo.txtG}> Lista de produtos #2</Text>
            {obterLista()}
        </>
    )
}