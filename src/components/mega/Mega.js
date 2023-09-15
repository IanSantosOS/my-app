import { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {
    state = {
        qntDeNum: this.props.qntDeNum || 0,
        numeros: []
    }
    
    alterarQntNumero = (novaQNT) => {
        this.setState({ qntDeNum: +novaQNT })
    }
    
    gerarNumeroNaoContido = (nums) => {
        const novoNum = parseInt(Math.random() * 60) + 1;
        return nums.includes(novoNum) ? this.gerarNumeroNaoContido(nums) : novoNum;
    }
    
    gerarNumeros = () => {
        const numeros = Array(this.state.qntDeNum)
            .fill()
            .reduce((nums) => [...nums, this.gerarNumeroNaoContido(nums)], [])
        this.setState({ numeros });
    }
    
    exibirNumeros = () => {
        const nums = this.state.numeros
        return (
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
                {nums.map(num => {
                return <MegaNumero key={num} num={num} />})}
            </View>
        )
    }
    
    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>

                <TextInput
                    style={{borderBottomWidth: 1}}
                    keyboardType='numeric'
                    placeholder='Digite um Número'
                    value={`${this.state.qntDeNum}`}
                    onChangeText={this.alterarQntNumero}
                />

                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />

                {this.exibirNumeros()}
            </>
        )
    }
}