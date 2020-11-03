import React, {useState} from 'react';

import {View, StyleSheet, Image, Button} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {Alert} from 'react-native-web';

async function askForPermissions() {
  const {status} = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );

  if (status !== 'granted') {
    Alert.alert('Ошибка, вы не дали прав на создание фото');
    return false;
  }
  return true;
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);

  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();

    if (!hasPermissions) {return;}

    const imagePicker = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    });

    setImage(imagePicker.uri);
    onPick(imagePicker.uri);
  };

  return (
    <View style={styles.wrapper}>
      <Button title={'Сделать фото'} onPress={takePhoto}/>
      {image && <Image source={{uri: image}} style={styles.image}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
});
