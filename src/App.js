import React from 'react';
import { Text, SafeAreaView, StyleSheet} from 'react-native';
import Mega from './components/mega/Mega';
// import FlexboxV4 from './components/layout/FlexboxV4';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import Quadrado from './components/layout/Quadrado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
//import Titulo from './components/Titulo';
// import Primeiro from './components/Primeiro';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';

function App() {
    return (
        <SafeAreaView style={style.App}>


            <Mega qtdeNumeros={13}/>
            {/* 
            <FlexboxV4/>
            <FlexboxV1/>
            <DigiteSeuNome/>
            <ListaProdutosV2/>
            <ListaProdutos/>
            <UsuarioLogado usuario={{nome:'Isabela', email:'isabela@gmail.com'}}/>
            <UsuarioLogado usuario={{ email:'isabela@gmail.com'}}/>
            <UsuarioLogado usuario={{nome:'Isabela'}}/>
            <UsuarioLogado usuario={{}}/>
            <Familia>
                <Membro nome="bia" sobrenome="motta"/>
                <Membro nome="isa" sobrenome="marques"/>
            </Familia>
            <Familia>
                <Membro nome="ana" sobrenome="silva"/>
                <Membro nome="julia" sobrenome="marques"/>
                <Membro nome="gui" sobrenome="marques"/>
                <Membro nome="rebecca" sobrenome="marques"/>
                <Membro nome="antonio" sobrenome="marques"/>
            </Familia>

            <ParImpar num={3} />
            <Diferenciar/>
            <ContadorV2/>
            <Pai/>
            <Contador inicial={100} passo={13}/>
            <Contador inicial={100} />
            <Botao/>
            <Titulo principal="Cadastro produto" secundario="Tela de cadastro de produto"/>
            <MinMax min="3" max="30"/> 
            <Aleatorio min={5} max={20}/> 
            <CompPadrao/>
            <Comp1 />
            <Comp2 />
            <Primeiro /> 
            */}
        </SafeAreaView>)
}
export default App;

const style = StyleSheet.create({
    App:{
        flexGrow:1,
        justifyContent: "center",
        alignItems: "center", 
        padding: 20
    }
})