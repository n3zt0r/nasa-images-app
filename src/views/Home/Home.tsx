import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {format, sub} from 'date-fns';

import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';

import fetchApi from '../../utils/fetch';
import {PostImage} from '../../types';

export default function Home() {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

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

    const loadLastFiveDaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');

        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        );

        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
        setLastFiveDaysImages([]);
      }
    };

    loadTodayImage().catch(null);
    loadLastFiveDaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 17},
});
