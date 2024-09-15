import React from 'react';
import {View, StyleSheet, Image, Text, Button, TextInput, TouchableOpacity} from "react-native";
import {AirbnbRating} from "react-native-elements";

const ProductReview = () => {
    return (<View style={styles.container}>
        <View style={styles.productInfo}>
            <Image
                style={{
                    width: 100,
                    height: 120,
                    marginRight: 10,
                }}
                source={{uri: './assets/book.png'}}
            />
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    alignSelf:'flex-start',
                }}>
                USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa bluetooth</Text>
        </View>
        <View>
            <AirbnbRating
                count={5}
                reviews={['Cực kỳ không hài lòng',
                    'Không hài lòng',
                    'Bình thường',
                    'Hài lòng',
                    'Cực kỳ hài lòng']}/>
            <TouchableOpacity style={styles.imagePickerButton}>
                <Image style={{width: 40, height: 40}}
                       source={{uri: './assets/camera-icon-21.png'}}/>
                <Text
                    style={{
                        marginLeft: 8,
                        fontSize: 24,
                        color: '#333',
                        fontWeight: 'bold'
                    }}>
                    Thêm hình ảnh</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.textArea}
                placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
                placeholderTextColor="#888"
                multiline
                numberOfLines={10}
            />
            <Button title="Gửi" color="#007bff"/>
        </View>
    </View>)
        ;
};

export default ProductReview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    productInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    imagePickerButton: {
        flexDirection: 'row',
        marginVertical: 15,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#0000dd',
        borderWidth: 1,
    },
    textArea: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
        marginTop: 20,
        marginBottom: 20,
        color: '#333',
    }
})