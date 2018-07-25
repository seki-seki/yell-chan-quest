import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {getShopWeaponList} from 'common/grobalFunction';

export default class WeaponShopScreen extends Component {
    constructor(props) {
        super(props)
        const weaponList = getShopWeaponList()
        this.state = {
            weaponList: weaponList
        }
    }

    render() {
        const {weaponList} = this.state
        console.log(weaponList)
        return (
            <View style={styles.container}>
                <FlatList
                    data={weaponList}
                    renderItem={({item}) =>
                        <View>
                            <Text style={styles.item}>{item.name},{item.price},{item.attack}</Text>
                            <TouchableHighlight>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Buy</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    item: {
        color: 'black'
    }
});