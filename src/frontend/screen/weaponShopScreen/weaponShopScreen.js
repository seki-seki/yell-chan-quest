import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {getShopWeaponList, getUserData, modifyUserData} from "../../../common/grobalFunction";
import {connect} from 'react-redux'
import * as actions from "../../../controller/action";

class WeaponShopScreen extends Component {
    constructor(props) {
        super(props)
        const weaponList = getShopWeaponList()
        this.state = {
            weaponList: weaponList,
            userData : this.props.userData
        }
    }

    render() {
        const {weaponList,userData} = this.state
        const {dispatch} = this.props
        console.log(userData)
        return (
            <View style={styles.container}>
                <Text>{userData.gold}G</Text>
                <FlatList
                    data={weaponList}
                    renderItem={({item}) =>
                        <View>
                            <Text style={styles.item}>{item.name},{item.price},{item.attack}</Text>
                            <TouchableHighlight onPress = {() => this.buyWeapon(item,userData,dispatch)}>
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

    async buyWeapon(item,userData,dispatch) {
        userData.items.push(item)
        userData.gold -= item.price
        await dispatch(actions.setUserData(userData))
        this.setState({userData:userData})
    }

}


const mapStateToProps = (state) => ({
    ...state
})
export default connect(mapStateToProps)(WeaponShopScreen)


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