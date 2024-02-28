import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

function calcBmi(height, weight) {
  return weight / (height * height);
}

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  function startCalc() {
    let result = calcBmi(height, weight);
    setBmi(result);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Testtömegindex számolás</Text>
      <StatusBar style="auto" />
      
      <Text style={styles.text}>Magasság (m)</Text>
      <TextInput
      style={styles.input}
      onChangeText={height => setHeight(height)}
      />

      <Text style={styles.text}>Testsúly (kg)</Text>
      <TextInput
      style={styles.input}
      onChangeText={weight => setWeight(weight)}
      />
      <Text style={styles.text}>Testtömegindex: {bmi}</Text>

      
      <Pressable style={styles.button}>
        <Text onPress={startCalc}>
          Számol
        </Text>
      </Pressable>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0EEE0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#2E8B57',
  },

  button: {
    backgroundColor: '#7CFC00',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },

  input: {
    backgroundColor: '#F5F5DC',
    height: 50,
    fontWeight: 'bold',
    borderColor: '#556B2F',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  text: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24,
    color: '#228B22', // elnézést tanár úr ezért a zöld szín kompozícióért, nem néz ki a legjobban az biztos
  }
});