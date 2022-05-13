import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../firebase';

export default function Update({ navigation }) {

    const [listFire, setListFire] = useState(null);

    function index() {
        navigation.navigate("Index", {
        });
    }

    useEffect(() => {
        try {
            firebase.database().ref('/agenda').on('value', (snapshot) => {
                const list = [];
                snapshot.forEach((childItem) => {
                    list.push({
                        horario: childItem.val().horario,
                        nome: childItem.val().nome,
                        data: childItem.val().data,
                        preco: childItem.val().preco,
                    });
                });
                setListFire(list);
            })
        } catch (error) {
            alert(error);
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 20 }} >
                <Text style={styles.text}>Agenda</Text>
            </View>
            <FlatList style={styles.viewFlat} data={listFire}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) =>
                    <View style={styles.iconFlat}>
                        <Text style={styles.text}>Nome: {item.nome} </Text>
                        <Text style={styles.text}> Horario: {item.horario}</Text>
                        <Text style={styles.text}> Dia: {item.data}</Text>
                        <Text style={styles.text}> Preço: {item.preco}</Text>
                    </View>
                } />
            <TouchableOpacity style={styles.btnVoltar} onPress={() => { index() }}>
                <Text style={styles.textBt}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#990000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnVoltar: {
        backgroundColor: "#2D0000",
        color: '#fff',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#FF0505',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    textBt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconFlat: {
        flexDirection: 'row',
        width: 390,
        height: 70,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderWidth: 4,

    },
    viewFlat: {
        marginTop: 5,
        maxHeight: 410,
    }
});