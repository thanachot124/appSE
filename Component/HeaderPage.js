import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

function HeaderPage({ title = "ชื่อหน้า", navigation}) {
    return (
        <View style={{ flexDirection: "row" }}>
            { navigation &&
            <TouchableOpacity onPress={() => navigation.back()}>
                 <Icon name="chevron-left" size={20} color="#000000" />
            </TouchableOpacity>
            }
            <Text style={{ fontSize: 24, fontWeight: "700", marginLeft: "auto", marginRight: "auto" }}>
                {title}
            </Text>
        </View>
    )
}

export default HeaderPage