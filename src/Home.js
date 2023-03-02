import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import HeaderPage from '../Component/HeaderPage';




// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderPage title="การชำระบริการ" />
      <ScrollView style={{marginTop: 20}}>

        <View style={styles.car} >
          <Image
            style={styles.logo}
            source={{
              uri: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2023/perfomance/corvette/01-images/nav/2023-corvette-3lt-gkz-driver-front-3quarter-nav.jpg?imwidth=960',
            }}
          />
        </View >
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginTop: 50, color: "#005980", fontWeight: "bold", }}>
            ค่าบริการรายเดือน
          </Text>
          <Text style={{ marginLeft: 130, marginTop: 50, color: "#005980", fontWeight: "bold", }}>
            17,000
          </Text>

        </View>
        <View style={{ marginTop: 10, }}>
          <Progress.Bar progress={0.1} width={300} height={10} />

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 13, }}>
              2/36
            </Text>
            <Text style={{ marginLeft: 70 }}>รอบการชำระทุกๆวันที่1ของทุกเดือน</Text>
          </View >
          <Text style={{ borderTopWidth: 1, marginTop: 70 }}>  </Text>

          <Text style={{ marginTop: 5, fontSize: 16, fontWeight: "bold" }}>รายการที่ต้องชำระ</Text>
          <Text style={{ marginTop: 80, fontSize: 14, textAlign: 'center', }}>ไม่มีรายการที่ต้องชำระ</Text>
          <View style={{ flex: 1, marginTop: 150 }}>

            <Button
              title="Next"
              onPress={() => navigation.navigate('Sale')}
            />
          </View>

        </View>
      </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {


    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'stretch',
    justifyContent: 'center',


  },
  car: {
    justifyContent: 'center',
    alignItems: 'center',


  },

});
