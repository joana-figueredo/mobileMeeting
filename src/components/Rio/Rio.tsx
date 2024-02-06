import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';

export const Rio = () => {
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/caraa1.png')}
        style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Nascente do Rio dos Sinos</Text>
        </View>
        <View style={styles.containerVerde}>
          <ScrollView>
            <Image
              source={require('../../assets/images/nascente.png')}
              style={styles.f}
              resizeMode="contain"
            />
            <Text style={styles.paragrafo}>
              The source of the Rio do Sinos is located in Vila Fraga, in Caraá.
              To reach it, you need to traverse about two kilometers of trail,
              usually taking around three hours (two hours uphill and one hour
              downhill). The waterfall is approximately 116 meters high. The Rio
              dos Sinos was once considered one of the most polluted rivers in
              Rio Grande do Sul, but hiking this trail provides you with the
              opportunity to explore waterfalls and natural pools with clear,
              crystalline, and drinkable water.
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  containerTitle: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 50,
    color: '#14352A',
    padding: 10,
    textAlign: 'center',
  },
  containerVerde: {
    width: 300,
    height: 500,
    backgroundColor: '#14352A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  f: {
    height: 400,
    marginTop: -40,
  },
  paragrafo: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },
});
