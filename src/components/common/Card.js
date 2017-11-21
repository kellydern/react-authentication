// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ebebeb',
    borderBottomWidth: 0,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
  }
};

// Make the component available to other parts of the app
export { Card };
