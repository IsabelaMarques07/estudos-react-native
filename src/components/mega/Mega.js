import React, {Component} from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Estilo from '../estilo'
import Numero from './Numero';

export default class Mega extends Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros +1000
    //     }
    // }

    //RESOLVER ERRO DO THIS
    // constructor(props){
    //     super(props)

    //     //o bind significa que sempre que this for chamado dentro dessa função
    //     //Ele vai apontar exatamente para o mesmo this como parâmetro
    //     //se colocar um {}, siginifca que o this da função alterarQtdeNumero vai apontar para objeto vazio
    //     //se colocar o número 3, significa que ele vai apontar para o número 3
    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }


    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    //Resolver o problema do this
    alterarQtdeNumero = (qtde)=> {
        this.setState({ qtdeNumeros: +qtde }) 
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
                        .fill() 
                        .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
                        .sort((a, b)=> a - b)
        this.setState({ numeros })
    }

    //Outra alternativa
    // gerarNumeros = () => {
    //     const {qtdeNumeros} = this.state
    //     const numeros = []
    //     for(let i = 0; i < qtdeNumeros; i++){
    //         numeros.push(this.gerarNumeroNaoContido(numeros))
    //     }
    //     numeros.sort((a, b)=> a-b)
    //     this.setState({ numeros })
    // }

    exibirNumeros = () =>{
        const nums = this.state.numeros
        return nums.map(num =>{
            return <Numero key={num} num={num}/>
        })
    }

    render(){
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena 
                    
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde de números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                    // Outra forma de resolver o problema do this
                    // onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                />
                <Button
                    title="Gerar números"
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    {this.exibirNumeros()}
                </View>

            </>
        )
    }

}