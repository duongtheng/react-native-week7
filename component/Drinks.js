import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native'
const Drinks = ({navigation}) => {

    const [data, setData] = useState();
    useEffect(() => {
        fetch("https://653f4c109e8bd3be29e031ab.mockapi.io/drinks")
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData)
                setData(responseData);
            })
            .catch(error => {
                console.error('Erro fetching data:', error)
            }
            );
    }, [])
    const Item = ({ item }) => {
        console.log(item)
        return <View style={{
            alignItems: "center",
            justifyContent:'center',
            width: 300,
            height: 100,
            margin: 10,
            borderWidth:1,
            borderRadius:10
        }}>
            <View style={{ flexDirection: "row" }}>
                <Image source={{ uri: item.url }}
                    style={{ width: 70, height: 70 }}
                ></Image>

                <View style={{ marginLeft: 20 }}>
                   
                    <Text style={{fontSize:16, fontWeight:500}}>{item.name}</Text>
                    <View style={{ flexDirection: "row", justifyContent:"space-between" }}> 
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/p.png")} style={{width:20,height:20}}></Image>
                        <Text>${item.price}
                        </Text>
                    </View>
                    <Image source={require("../assets/t.png")} style={{width:20,height:20,margin:20}}></Image>
                    <Image source={require("../assets/d.png")} style={{width:20,height:20, margin:20}}></Image>
                    </View>
                </View>
            </View>
        </View>

    }
    return (
        <View>
           <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('2')}>
                    <Image source={require("../assets/vec.png")} style={{ width: 30, height: 30 }}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 500 }}> Drinks</Text>
                <Image source={require("../assets/search.png")} style={{ width: 30, height: 30 }}></Image>
            </View>
            <FlatList data={data} renderItem={({ item }) => <Item item={item} />} />
        </View>
    );
}
const styles = StyleSheet.create({})

export default Drinks;
