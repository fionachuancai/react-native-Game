import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#ffcc33',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    textAlign: 'center',
  },
});

const { container, text } = styles;

const Header = () => {
    return (
        <View style={container}>
            <Text style={text}>Memory and Match</Text>
        </View>
    );
}

export default Header;