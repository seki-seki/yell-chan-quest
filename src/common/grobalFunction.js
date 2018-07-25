import store from 'react-native-simple-store'
import settings from 'common/settings'

export const getUserData = () => {
    store.get('user').then((res) => {
        return res
    })
}

export const createYellChan = () => {
    return createUserData({
        name: "yell",
        level: 1,
        gold: 1000,
        status: {hp: 100, mp:30, str: 10, vit: 10, dex: 10, agi: 10, int: 10, luk: 10},
        bonusPoint:0
    })
}

export const createUserData = (data) => {
    store.save('user', data)
    return data;
}

export const getShopWeaponList = () => {
    return settings.shopWeaponList
}

export const getItems = () =>{
    store.get('items').then((res) => {
    return res
})
}