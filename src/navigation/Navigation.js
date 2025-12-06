import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "../screens/ProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            title: "Produits",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("ShoppingCart")}
                style={{ marginRight: 15 }}
              >
                <Ionicons name="cart-outline" size={28} color="black" />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailScreen}
          options={({ navigation }) => ({
            title: "Détails du produit",
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("ShoppingCart")}
                style={{ marginRight: 15 }}
              >
                <Ionicons name="cart-outline" size={28} color="black" />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCartScreen}
          options={{ title: "Panier" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}