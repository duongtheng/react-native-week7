import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native';

const Shop = ({ navigation }) => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("https://653f4c109e8bd3be29e031ab.mockapi.io/shop")
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
            width: 300,
            height: 100,
            margin: 50
        }}> <TouchableOpacity
            onPress={() => navigation.navigate('3')}>
                <Image source={{ uri: item.url }}
                    style={{ width: 300, height: 100 }}
                ></Image>
            </TouchableOpacity>

            <View style={{ flexDirection: "row" }}>
                {item.status === true ? <View style={{ flexDirection: "row" }}>
                    <Image source={require("../assets/tick.png")} style={{ width: 15, height: 15 }}></Image>
                    <Text>Accepting Orders</Text>
                </View> : <View style={{ flexDirection: "row" }}>
                    <Image source={require("../assets/lock.png")} style={{ width: 15, height: 15 }}></Image>
                    <Text>Tempory Unavailable</Text>
                </View>}
                <View style={{ flexDirection: "row", marginLeft: 20 }}>
                    <Image source={require("../assets/clock.png")} style={{ width: 15, height: 15 }}></Image>
                    <Text style={{
                    }}>{item.time}</Text>
                </View>
            </View>



            <Text style={{ fontSize: 15, fontWeight: 500 }}>{item.name}</Text>
            <Text>{item.address}</Text>
        </View>
    }
    return (

        <View style={{

        }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('1')}>
                    <Image source={require("../assets/vec.png")} style={{ width: 30, height: 30 }}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 500 }}> Shop Near Me</Text>
                <Image source={require("../assets/search.png")} style={{ width: 30, height: 30 }}></Image>
            </View>
            <Image source={{ uri: 'https://res.cloudinary.com/dexrwufu2/image/upload/v1698646990/react/1_vv8eoo.png' }} styles={{ width: 300, height: 100 }} />

            <FlatList data={data} renderItem={({ item }) => <Item item={item} />} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Shop;
