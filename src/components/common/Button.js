// Import libraries for making a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#353CFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    borderColor: '#353CFF',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
  }
};

// Make the component available to other parts of the app
export { Button };
