import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

export default class ReactNativeHacks extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11', 'row 12', 'row 13'
      ]),
    };
  }

  render() {
    return (
        <View style={styles.container}>
              <Text style={styles.welcome}>
               Example of Listview
              </Text>
          <View style={styles.container2}>  
            <Text style={styles.listData}>Scrollable List</Text>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
               <Text style={styles.listValue}>{rowData}</Text> }
          />
          </View>
          <Text style={styles.welcome}>
            End of Listview
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  container2: {
    flex: 1,
  },
  listData: {
    fontSize: 20,
  },
  listValue: {
    fontSize: 20,
    paddingVertical:10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('ReactNativeHacks', () => ReactNativeHacks);
