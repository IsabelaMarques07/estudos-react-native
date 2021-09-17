import React, {Component} from 'react';
import { Text, TextInput } from 'react-native';
import Estilo from '../estilo'

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
        qtdeNumeros: this.props.qtdeNumeros
    }

    //Resolver o problema do this
    alterarQtdeNumero = (qtde)=> {
        this.setState({ qtdeNumeros: qtde })
    }

    render(){
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena 
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType={'number-pad'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde de números"
                    value={this.state.qtdeNumeros}
                    onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                    // Outra forma de resolver o problema do this
                    // onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                />
            </>
        )
    }

}