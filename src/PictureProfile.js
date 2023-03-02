
import React, { Component,} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
        
import * as ImagePicker from 'expo-image-picker';
export default class PictureProfile extends Component {

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({image:result.uri})
    }
  };
    constructor(){
        super()
        this.state={
            image:'https://www.img.in.th/images/120a87c16412657088ab4e787600167d.png'
        }

    }
 
    render() { 
        return (
          <View style={{flex:1,backgroundColor:'white',padding:20}}>
          
          <TouchableOpacity style={{flex:1}}onPress={this.pickImage} >     
                               
                <Image style={{flex:1,width:'100%',height:'100%',borderWidth:1,resizeMode:'center'}} source={{uri:this.state.image}} />
                <Text style={{color:"#005980"}}>Upload</Text>   
            </TouchableOpacity>
          </View>)
      }
}

const styles = StyleSheet.create({

});