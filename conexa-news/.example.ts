// // CON MMKV
// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import MMKVStorage from "react-native-mmkv-storage";
// import { useQuery } from "react-query";
// import axios from "axios";

// // Setup MMKV Storage
// const storage = new MMKVStorage.Loader().initialize();

// // API Base URL
// const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// // Zustand Store for User Authentication
// const useAuthStore = create((set) => ({
//   isLoggedIn: false,
//   login: async (email, password) => {
//     if (email === "test@example.com" && password === "password") {
//       await storage.setItem("isLoggedIn", true);
//       set({ isLoggedIn: true });
//       return true;
//     }
//     return false;
//   },
//   logout: async () => {
//     await storage.removeItem("isLoggedIn");
//     set({ isLoggedIn: false });
//   },
//   initialize: async () => {
//     const savedLogin = await storage.getBooleanAsync("isLoggedIn");
//     set({ isLoggedIn: savedLogin || false });
//   },
// }));

// // Service to Fetch Data
// const fetchPosts = async () => {
//   const response = await axios.get(`${API_BASE_URL}/posts`);
//   return response.data;
// };

// const fetchUsers = async () => {
//   const response = await axios.get(`${API_BASE_URL}/users`);
//   return response.data;
// };

// // React Query Hooks
// export const usePosts = () => useQuery("posts", fetchPosts);
// export const useUsers = () => useQuery("users", fetchUsers);

// // Login Component Example
// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import { useAuthStore } from "./path_to_store";

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const login = useAuthStore((state) => state.login);

//   const handleLogin = async () => {
//     const success = await login(email, password);
//     if (success) {
//       navigation.replace("Home"); // Navigate to Home Screen
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 24,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 8,
//     marginBottom: 16,
//     borderRadius: 4,
//   },
// });

// export default LoginScreen;

// CON SECURE STORE

// import { create } from 'zustand';
// import * as SecureStore from 'expo-secure-store';
// import { useQuery } from 'react-query';
// import axios from 'axios';

// // API Base URL
// const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// // Define Types for API Responses
// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
// }

// // Zustand Store for User Authentication
// const useAuthStore = create((set) => ({
//   isLoggedIn: false,
//   login: async (email: string, password: string) => {
//     try {
//       const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
//       const users = response.data;

//       // Simulate login by checking if the email exists
//       const user = users.find((u) => u.email === email);
//       if (user && password === 'password') { // Using a fixed password for simulation
//         await SecureStore.setItemAsync('isLoggedIn', 'true');
//         set({ isLoggedIn: true });
//         return true;
//       }
//       return false;
//     } catch (error) {
//       console.error('Login error:', error);
//       return false;
//     }
//   },
//   logout: async () => {
//     await SecureStore.deleteItemAsync('isLoggedIn');
//     set({ isLoggedIn: false });
//   },
//   initialize: async () => {
//     const savedLogin = await SecureStore.getItemAsync('isLoggedIn');
//     set({ isLoggedIn: savedLogin === 'true' });
//   },
// }));

// // Service to Fetch Data
// const fetchPosts = async (): Promise<Post[]> => {
//   const response = await axios.get<Post[]>(`${API_BASE_URL}/posts`);
//   return response.data;
// };

// const fetchUsers = async (): Promise<User[]> => {
//   const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
//   return response.data;
// };

// // React Query Hooks
// export const usePosts = () => useQuery<Post[]>('posts', fetchPosts);
// export const useUsers = () => useQuery<User[]>('users', fetchUsers);

// // Login Component Example
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { useAuthStore } from './path_to_store';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const login = useAuthStore((state) => state.login);

//   const handleLogin = async () => {
//     const success = await login(email, password);
//     if (success) {
//       navigation.replace('Home'); // Navigate to Home Screen
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     marginBottom: 16,
//     borderRadius: 4,
//   },
// });

// export default LoginScreen;
