import * as React from 'react';
import { Text, View, StyleSheet,Image,Button } from 'react-native';
import Constants from 'expo-constants';

export default function Verify({navigation}) {
  return (
    <View style={styles.container}>
    
    
     
      <Text style={styles.paragraph}>
      
      
        ข้อมูล
      </Text>
      
      

     
      
      
      
     
     

      
       <View style={{ flex: 1,marginTop:600 }}>
      
      <Button
        title="ยืนยันข้อมูล"
        onPress={() => navigation.navigate('finish')}
      />
    </View>
       
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
