import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export default function Sinopses(props: any) {
    return (
        <View style={styles.container}>

            <View style={styles.modalContainer}>

                <TouchableOpacity style={styles.goBackButton} onPress={props.goBack}>
                    <Text style={{ color: '#FFF', fontSize: 16 }}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.title}>{props.data.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.description}>
                    {props.data.sinopse}
                </Text>
            </View>

        </View>
    )
}