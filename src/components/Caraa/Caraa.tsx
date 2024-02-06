import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
const img = [
  {screen: 'Rio', src: require('../../assets/images/group10.png')},
  {screen: 'Rio', src: require('../../assets/images/group10.png')},
  {screen: 'Rio', src: require('../../assets/images/group10.png')},
];

const ItemCard = (
  {
    item,
  }: {
    item: {screen: string; src: ImageSourcePropType};
  },
  navigation,
) => {
  console.log(item);

  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <Image style={styles.f} source={item.src} />
    </TouchableOpacity>
  );
};
export const Caraa = ({navigation}) => {
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/caraa1.png')}
        style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Caraá</Text>
        </View>
        <Carousel
          data={img}
          renderItem={item => {
            console.log(item);
            return ItemCard(item, navigation);
          }}
          sliderWidth={500}
          itemWidth={250}
        />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#14352A',
  },
  containerTitle: {
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    color: 'white',
    fontWeight: '800',
    fontSize: 50,
  },
  f: {
    width: 250,
    height: 450,
    objectFit: 'contain',
    marginTop: 36,
    borderColor: 'red',
    borderWidth: 1,
  },
});

function carousel(componente) {
  /**
   * ... logica do componente
   */

  const items = [
    {dataIndex: 0, index: 0, item: {screen: 'Rio', src: 1}},
    {dataIndex: 0, index: 0, item: {screen: 'Rio', src: 1}},
    {dataIndex: 0, index: 0, item: {screen: 'Rio', src: 1}},
  ];
  items.map(item => componente(item));
}
