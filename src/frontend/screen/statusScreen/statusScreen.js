import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getShopWeaponList} from "../../../common/grobalFunction";
import {connect} from 'react-redux'
import * as actions from "../../../controller/action";

class StatusScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: this.props.userData
        }
    }

    // {hp: 100, mp: 30, str: 10, vit: 10, dex: 10, agi: 10, int: 10, luk: 10}
    render() {
        const {userData} = this.state
        const {dispatch} = this.props
        const status = userData.status
        return (
            <View>
                <View>
                    <Text style={styles.bonusPoint}>Bonus Point: {userData.bonusPoint}</Text>
                </View>
                <View style={styles.container}>
                    <Text>HP: {status.currentHp}/{status.maxHp}</Text><Icon name={"ios-albums-outline"} size={30} color="#900"/>
                    <Text>MP: {status.currentMp}/{status.maxMp}</Text>
                    <Text>STR: {status.str}</Text>
                    <Text>VIT: {status.vit}</Text>
                    <Text>DEX: {status.dex}</Text>
                    <Text>AGI: {status.agi}</Text>
                    <Text>INT: {status.int}</Text>
                    <Text>LUK: {status.luk}</Text>
                </View>
            </View>
        );
    }

    async buyWeapon(item, userData, dispatch) {
        userData.items.push(item)
        userData.gold -= item.price
        await dispatch(actions.setUserData(userData))
        this.setState({userData: userData})
    }

}


const mapStateToProps = (state) => ({
    ...state
})
export default connect(mapStateToProps)(StatusScreen)


const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: 'center'
    },
    bonusPoint: {
        textAlign: 'right',
        paddingRight: 20,
        paddingTop:20
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