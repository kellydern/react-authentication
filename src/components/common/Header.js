// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// main styling for the component

const styles = {
  viewStyle: {
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600'
  }
};

// Make the component available to other parts of the app
export { Header };
