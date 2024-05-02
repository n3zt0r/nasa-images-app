import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
import fetchApi from '../../utils/fetch';
import {PostImage} from '../../types';

export default function Home() {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    loadTodayImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 17},
});
