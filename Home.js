import { connect } from 'react-redux';
import { incremented, decremented} from './reducer/counterSlice';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { styles } from './style/style';

function Home({ value, increment, decrement }) {
  return (
    <View style={styles.container}>
      <Text style={styles.usernameContainer}>Hi Bruce</Text>
      <Text>Count: {value}</Text>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value, // maping the redux state to the props passing to the component
});

const mapDispatchToProps = {
  increment: incremented,
  decrement: decremented,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);