import {FC} from 'react';
import {Button, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {PostImage} from '../../types';

const TodaysImage: FC<PostImage> = ({date, title, url}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C449D',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default TodaysImage;
