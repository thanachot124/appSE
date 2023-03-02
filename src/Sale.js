import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HeaderPage from "../Component/HeaderPage";

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

const data = [
  {
    label: "เช่าต่อ",
  },
  {
    label: "ซื้อเลย",
  },
  {
    label: "ยกเลิกการเช่า",
  },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderPage title="เช่า-ซื้อ" navigation={navigation}/>
      <ScrollView>
        <Text style={styles.paragraph}>เช่า-ซื้อ</Text>

        <View style={styles.car}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://img.freepik.com/premium-photo/d-render-sports-car-with-lights-goes-camera-black-background_161488-1059.jpg",
            }}
          />
        </View>

        <Text style={{ marginTop: 50, fontWeight: "bold" }}>
          คุณต้องการเลือกแบบใด
        </Text>

        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          icon={<Icon name="check-circle" size={20} color="#2c9dd1" />}
        />

        <Button
          style={{ marginTop: 300 }}
          title="Next"
          onPress={() => navigation.navigate("Accept")}
        />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 400,
    height: 100,
    resizeMode: "stretch",
    justifyContent: "center",
  },
  car: {
    justifyContent: "center",
    alignItems: "center",
  },
});
