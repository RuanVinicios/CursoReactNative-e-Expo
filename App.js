import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);

  function increment() {
    return setNumber(number + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Hello World - Olá mundo!</Text>
      <StatusBar style="dark" />
      
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.text}>add +</Text>
      </TouchableOpacity>

<Text style={styles.text}>{number}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  Text: { color: "white", fontSize: 20, marginTop: 20 },

  button: {

    backgroundColor:"blue",
    padding: 20,
  },
});

/*
function TextButton(props) {

  return <Text style={{ color: "white" }}>{props.title}</Text>;

 <TextButton title="Primeira aplicação mobile"/>

}



*/
