import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../firebase';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function Update({ navigation }) {
    const [horario, setHorario] = useState(null);
    const [data, setData] = useState(null);
    const [nome, setNome] = useState(null);
    const [preco, setPreco] = useState(null);
    const [alerta, setAlerta] = useState(false);

    function showAlerta() {
        setAlerta(true)
    }

    function hideAlerta() {
        setAlerta(false)
    }

    function agenda() {
        navigation.navigate("Agenda", {
        });
    }

    function gravaAgenda() {
       try {
           firebase.database().ref('/agenda').push({
               horario: horario,
               nome: nome,
               horario: horario,
               data: data,
               preco: preco
           })
       } catch (error) {
           alert(error);
       }
    }



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Agenda Barbearia</Text>
                <TextInput placeholder='Nome' style={styles.textInput} onChangeText={nome => setNome(nome)} value={nome} />
                <TextInput placeholder='Data' style={styles.textInput} onChangeText={data => setData(data)} value={data} />
                <TextInput placeholder='Horario' style={styles.textInput} onChangeText={horario => setHorario(horario)} value={horario} />
                <TextInput placeholder='Preço' style={styles.textInput} onChangeText={preco => setPreco(preco)} value={preco} />
            </View>
            <TouchableOpacity style={styles.btnEnviar} onPress={() => { gravaAgenda() }}>
                <Text style={styles.textBt}>Inserir Na Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEnviar} onPress={() => { agenda() }}>
                <Text style={styles.textBt}>Visualizar Agenda</Text>
            </TouchableOpacity>
            <AwesomeAlert
                show={alerta}
                showProgress={false}
                title="Campo Obrigatório"
                message="Digite o nome do cliente"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                //showCancelButton={true}
                showConfirmButton={true}
                //cancelText="No, cancel"
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                hideAlerta();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        backgroundColor: '#990000',
        alignItems: 'center',
    },
    viewLinha: {
        marginTop: 15,
        flexDirection: 'row',
    },

    textBt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
    },
    text: {
        margin: 5,
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    btnEnviar: {
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
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 5,
        fontSize: 36,
    },
});