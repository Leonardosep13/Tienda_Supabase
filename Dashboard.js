import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from './SupaBase';

const CatalogScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('Tienda')
          .select('id, Producto, Cantidad, MarcaProducto, Imagen, Descripcion');
        if (error) throw error;
        setData(data);
      } catch (error) {
        console.log('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#00ff00" />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {data ? (
          data.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigation.navigate('Detalles', { id: item.id })}>
              <Text style={styles.title}>{item.Producto}</Text>
              <Text>Marca: {item.MarcaProducto}</Text>
              <Text>Cantidad: {item.Cantidad}</Text>
              <Text>Descripción: {item.Descripcion}</Text>
              {item.Imagen && (
                <Image
                  source={{ uri: item.Imagen }}
                  style={styles.image}
                />
              )}
            </TouchableOpacity>
          ))
        ) : (
          <Text>No se encontraron datos.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default CatalogScreen;
