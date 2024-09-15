import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from "react";
import Tiki from "./page/Tiki";
import PasswordGenerator from "./page/PasswordGenerator";
import ProductReview from "./page/ProductReview";


const App = () => {
    const [count, setCount] = useState(0);
    const [array, setArray] = useState([1, 2, 3])

    return (

        <>
            {/*<Tiki/>*/}
            {/*<PasswordGenerator/>*/}
            <ProductReview/>
        </>
    );
}
export default App
