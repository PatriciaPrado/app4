// Importando o react e os componentes
import React, {Component} from 'react';

Importando os elemmrntos a seresm
import {StyleSheet, Text, View, Alert, Button} from 'react-native';

// floor tira as casas decimais
const gerarNumeroAleatorio = () =>{
  let total = '';
  for (let index = 0; index < 6; index++){
  let numero = Math.random();
  numero = Math.floor(numero * 100);
  total += `${numero} - `
  }

  // É utilizado para exibir as informações em forma de alerta
  Alert.alert("Número gerado", `${total}`);
}

export default class App extends Component {
  // Button - ONPRESS para chamar uma função quando clicar no button que tem o nome GERAR NÚMERO
  render() {
    return (
      <View>
        <Button title="Gerar número" onPress={gerarNumeroAleatorio}/>
      </View>
    );
  }
}
