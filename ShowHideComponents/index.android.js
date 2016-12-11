import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
export default class ShowHideComponents extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: true
    }
  }
  buttonClick() {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
        <View style={styles.container}>
          { this.state.flag &&
          <Text style={styles.welcome}>
            Hide or Show text dynamically by just clicking the button.
          </Text>
          }
          <TouchableNativeFeedback>
            <View style={styles.button}>
              <Text style={styles.buttonText}
                    onPress={() => { this.buttonClick()}}>Click here.</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#ff8000',
    borderRadius: 4,
    padding:10
  },
  buttonText : {
    color : '#fff',
    textAlign:'center',
    fontWeight: 'bold'
  },
});
AppRegistry.registerComponent('ShowHideComponents', () => ShowHideComponents);
