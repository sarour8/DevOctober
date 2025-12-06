import { View, FlatList, Image, StyleSheet, Pressable } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {productsSlice} from '../store/productSlice';
const ProductScreen = () => {
  const products = useSelector((state) => state.products.products);
  const navigation = useNavigation();
  const dispatch=useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));
              navigation.navigate("ProductDetails", { id: item.id });
            }
              
            }
            style={styles.itemContainer}
          >
            <Image
              source={{ uri: item.image }}
              style={[
                styles.image,
                (item.id === "2" || item.id === "13") && styles.rotatedImage,
              ]}
            />
          </Pressable>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  rotatedImage: {
    transform: [{ rotate: "-90deg" }],
  },
});