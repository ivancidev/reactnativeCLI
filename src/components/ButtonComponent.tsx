import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonComponentProps = {
  title: string;
  onPress: () => void;
  style: object;
  textStyle?: object;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4CAF50',
    padding: 18,
    width: 150,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 800
  },
});

export default ButtonComponent;
