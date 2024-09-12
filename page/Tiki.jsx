import React, {useState} from "react";
import {Button, Text, TextInput, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {URL} from "expo/build/winter/url";


const Tiki = () => {
    const [quantity, setQuantity] = useState(1);
    const [discountCode, setDiscountCode] = useState('');
    const [price, setPrice] = useState(141800);
    const [subtotal, setSubtotal] = useState(price * quantity);
    const [total, setTotal] = useState(price * quantity)


    const decreasementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            console.log(quantity)
            setTotal((quantity - 1) * price)
            setSubtotal((quantity - 1) * price)

        } else {
            setQuantity(1)
            setTotal(quantity * price)
            setSubtotal(quantity * price)
        }
    }

    const increasementQuantity = () => {
        setQuantity(quantity + 1)
        setTotal((quantity + 1) * price)
        setSubtotal((quantity + 1) * price)
    }

    return (


        <View style={styles.container}>
            <View style={styles.productContainer}>
                <Image
                    style={styles.productImage}
                    source={{uri: './assets/book.png'}}
                />
                <View style={styles.productDetails}>
                    <Text style={styles.productTitle}>Nguyên hàm, tích phân và ứng dụng</Text>
                    <Text style={styles.productTitle}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={styles.productPrice}>{price.toLocaleString()} đ</Text>
                    <Text>{price.toLocaleString()} đ</Text>

                    <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={decreasementQuantity}>
                            <Text style={styles.quantityButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>

                        <TouchableOpacity onPress={increasementQuantity}>
                            <Text style={styles.quantityButton}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.hyperlink}>
                            Mua sau</Text>
                    </View>

                </View>

            </View>
            <View style={styles.discountContainer}>
                <Text>Mã giảm giá đã lưu    </Text>
                <Text style={styles.hyperlink}>Xem tại đây</Text>
            </View>
            <View style={styles.discountContainer}>

                <TextInput
                    style={styles.input}
                    placeholder="Mã giảm giá"
                    value={discountCode}
                    onChangeText={setDiscountCode}
                />
                <Button title="Áp dụng"/>
            </View>
            <View style={styles.discountContainer}>
                <Text style={{fontWeight: "bold"}}>Bạn có phiếu quà tặng Tiki/Got It/Urbox? </Text>
                <Text style={styles.hyperlink}>Nhập tại đây?</Text>

            </View>

            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Tạm tính: </Text>
                <Text style={styles.price}>{subtotal.toLocaleString()} đ</Text>
            </View>


            <View style={styles.totalContainer}>
                <Text style={styles.subtotalText}>Thành tiền:</Text>
                <Text style={styles.price}> {total.toLocaleString()} đ</Text>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    productContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    productImage: {
        width: 100,
        height: 150,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10,
    },
    quantityContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        fontSize: 18,
        paddingHorizontal: 10,
    },
    quantityText: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    hyperlink: {fontWeight: "bold", color: "#0000ff"},
    discountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    subtotalContainer: {
        marginBottom: 20,
        flexDirection: "column",
    },
    totalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    subtotalText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#ff0000",
        alignSelf: 'flex-end',
    },
    checkoutButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    },
});


export default Tiki;