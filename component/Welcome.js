import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function Welcome({ navigation }) {
    return (
        <View style={{ alignItems: "center" }}>

            <View style={{ marginTop: 50 }}>
                <Text style={{ fontSize: 30, fontWeight: 600 }} >Welcome to Cafe world</Text>
            </View>
            <TouchableOpacity
                    onPress={() => navigation.navigate('3')}>
                   <Image source={{ uri: "https://res.cloudinary.com/dexrwufu2/image/upload/v1698646990/react/1_vv8eoo.png" }} style={{ width: 250, height: 100, marginTop: 50, borderRadius: 10 }} ></Image>
                </TouchableOpacity>
           

            <Image source={{ uri: "https://res.cloudinary.com/dexrwufu2/image/upload/v1698646991/react/2_fjuqir.png" }} style={{ width: 250, height: 100, marginTop: 50, borderRadius: 10 }} ></Image>

            <Image source={{ uri: " https://res.cloudinary.com/dexrwufu2/image/upload/v1698646994/react/3_o57vlk.png" }} style={{ width: 250, height: 100, marginTop: 50, borderRadius: 10 }} ></Image>
            <TouchableOpacity
                onPress={() => navigation.navigate('2')}>

                <View style={{
                    borderWidth: 1,
                    paddingHorizontal: 50,
                    paddingVertical: 15,
                    borderColor: "lightblue",
                    borderRadius: 10,
                    backgroundColor: "lightblue",
                    marginTop: 50

                }}>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }} >Get Started</Text>
                </View>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({})