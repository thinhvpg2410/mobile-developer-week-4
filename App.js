import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from "react";
import Tiki from "./page/Tiki";


const App = () => {
    const [count, setCount] = useState(0);
    const [array, setArray] = useState([1, 2, 3])

    return (
        // <View style={{flexDirection: "column"}}>
        //     <View style={{marginBottom: 30}}>
        //         <Button title={"Click me"}
        //                 onPress={() => setCount(count + 1)}/>
        //         <Text>You Clicked me {count} times</Text>
        //     </View>
        //
        //     <View>
        //         <Text>Update Array</Text>
        //         <Button title={"Click me"}
        //                 onPress={() =>
        //                     setArray(oldArray => oldArray.map(num => num + 1))}/>
        //         {array.map((array, index) => (
        //             <Text style={{fontSize: 18}} key={index}>
        //                 {array}
        //             </Text>))}
        //     </View>
        // </View>
        <><Tiki/></>
    );
}
export default App
