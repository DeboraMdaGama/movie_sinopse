import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './style';

import api from '../../services/api';
import Movie from '../Movie';

interface Imovie {
    id: number;
    nome: string;
    sinopse: string;
    foto: string;
}

export default function Home() {
    const [movies, setMovies] = useState<Imovie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadingMovies() {
            const response = await api.get('r-api/?api=filmes');
            setMovies(response.data);
            setLoading(false);
        }
        loadingMovies();
    }, []);
    if (loading) {
        return (
            <View style={styles.loadingScreen}>
                <ActivityIndicator color='white' size={50} />
            </View>
        )

    } else {
        return (
            <View>
                <FlatList
                    data={movies}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <Movie data={item} />}
                />
            </View>
        );
    }
};