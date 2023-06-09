import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { multipliedBy } from './reducer/gymDataSlice';
import { styles } from './style/style';

function Home({ value, dispatch }) {
  const [number, setNumber] = useState('');
  const handleButtonClick = () => {
    const parsedNumber = parseFloat(number);
    if (!isNaN(parsedNumber)) {
      dispatch(multipliedBy({ number: parsedNumber }));
      setNumber('');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.usernameContainer}>Progress</Text>
      <Text>Count: {value}</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={setNumber}
        placeholder="Enter a number"
        keyboardType="numeric"
      />
      <Button title="Multiply" onPress={handleButtonClick} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  value: state.gymData.value,
});

export default connect(mapStateToProps)(Home);