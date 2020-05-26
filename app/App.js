import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'

class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTap='always' style={styles.content}>
          <Text style={styles.text}>Test Text</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  },
  text: {
    fontSize: 72
  }
})

export default App
