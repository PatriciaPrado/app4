import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native';

// floor tira as casas decimais
const gerarNumeroAleatorio = () =>{
  let total = '';
  for (let index = 0; index < 6; index++){
  let numero = Math.random();
  numero = Math.floor(numero * 100);
  total += `${numero} - `
  }
  Alert.alert("Número gerado", `${total}`);
}


export default class App extends Component {
  render() {
    return (
      <View>
        <Button title="Gerar número" onPress={gerarNumeroAleatorio}/>
      </View>
    );
  }
}
