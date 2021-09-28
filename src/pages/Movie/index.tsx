import React, { useEffect, useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';

import api from 'axios';
import { styles } from './styles';
import Sinopses from '../Sinopses';

export default function Movie(props: any) {
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{props.data.nome}</Text>

                <Image source={{ uri: props.data.foto }} style={styles.imageCard} />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonContent} onPress={() => setModalVisibility(true)}>
                        <Text style={styles.buttonText}>Ler Sinopse</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType='slide' visible={modalVisibility}>
                <Sinopses data={props.data} goBack={() => setModalVisibility(false)}/>
            </Modal>

        </View>
    );
};