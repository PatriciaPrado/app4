import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native';

// floor tira as casas decimais
const gerarNumeroAleatorio = () =>{
  let numero = Math.random();
  numero = Math.floor(numero*1000);
  Alert.alert("Número gerado", `${numero}`);
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
