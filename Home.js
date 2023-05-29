import { connect } from 'react-redux';
import { incremented, decremented} from './reducer/gymDataSlice';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { styles } from './style/style';

function Home({ value, dispatch}) {
  const handleIncClick = () => {
    dispatch(incremented());
  }
  
  const handleDecClick = () => {
    dispatch(decremented());
  }
  return (
    <View style={styles.container}>
      <Text style={styles.usernameContainer}>Hi Bruce</Text>
      <Text>Count: {value}</Text>
      <TouchableOpacity style={styles.button} onPress={handleIncClick}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDecClick}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const mapStateToProps = (state) => ({
  value: state.gymData.value, // maping the redux state to the props passing to the component
});



export default connect(mapStateToProps)(Home);