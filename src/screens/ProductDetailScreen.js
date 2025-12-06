import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";

const ProductDetailScreen = ({ route }) => {
  const id = route?.params?.id;
  const product = products.find((p) => p.id === id);
  const { width } = useWindowDimensions();
  const addToCart = () => {
    console.warn("Ajouter au panier:");
  }
  if (!product) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Produit introuvable.</Text>
      </View>
    );
  }

  return (
    // flatlist for images, scroll view for content
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={[
                { width, aspectRatio: 1 },
                (product.id === "2" || product.id === "13") &&
                  styles.rotatedImage,
              ]}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item, index) => `${product.id}-img-${index}`}
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>

          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Ajouter au panier</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 34,

    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 8,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  rotatedImage: {
    transform: [{ rotate: "-90deg" }],
  },
});