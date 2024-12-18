import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, TextInput } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState('1');

  const incrementCounter = () => {

    const incrementValue = parseInt(increment, 10);

    if (!isNaN(incrementValue)) {
        setCount(count + incrementValue);
        
    } else {
        alert("Numero no valido")
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/CzXTtJV.jpg" }} // Replace with your image URL or local asset
        style={styles.image}
      />
      <Text style={styles.text}>Counter: {count}</Text>
      <TextInput
        style={styles.input}
        value={increment}
        onChangeText={setIncrement}
        keyboardType="numeric" // Ensures only numeric input is allowed
        placeholder="Set increment amount"
      />
      <Button title="Contar" onPress={incrementCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    image: {
      width: 150, // Adjust width
      height: 150, // Adjust height
      marginBottom: 20,
      borderRadius: 10, // Optional: Rounded corners
    },
    text: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 5,
      },
  });

export default Counter;
