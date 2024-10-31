import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { supabase } from './SupaBase';

const ProductDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('Tienda')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        setProduct(data);
      } catch (error) {
        console.log('Error al obtener los datos del producto:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" color="#00ff00" />;

  if (!product) return <Text>No se encontró el producto.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.Producto}</Text>
      <Text>Marca: {product.MarcaProducto}</Text>
      <Text>Cantidad: {product.Cantidad}</Text>
      <Text>Descripción: {product.Descripcion}</Text>
      {product.Imagen && (
        <Image
          source={{ uri: product.Imagen }}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
});

export default ProductDetailsScreen;
