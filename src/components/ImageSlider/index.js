import React, { useState, useEffect } from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import { Image } from './styles';

const screenWidth = Dimensions.get('window').width;

export default function ImageSlider({ images, timeout, height, ...props }) {
  const [page, setPage] = useState(0);
  let scrollViewRef;

  useEffect(() => {
    scrollViewRef.scrollTo({ x: screenWidth * page, animated: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  setTimeout(() => {
    page === images.length - 1 ? setPage(0) : setPage(page + 1);
  }, timeout);

  return (
    <ScrollView
      {...props}
      ref={ref => (scrollViewRef = ref)}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}>
      {images.map(image => (
        <View key={image.id}>
          <Image
            source={{ uri: image.url }}
            width={screenWidth}
            height={height}
          />
        </View>
      ))}
    </ScrollView>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
  timeout: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
