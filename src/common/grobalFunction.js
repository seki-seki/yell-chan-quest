import store from 'react-native-simple-store'
import settings from "./settings";

export const getUserData = async() => {
    return await store.get('user')
}

export const createYellChan = () => {
    return createUserData({
        name: "yell",
        level: 1,
        gold: 1000,
        status: {hp: 100, mp: 30, str: 10, vit: 10, dex: 10, agi: 10, int: 10, luk: 10},
        bonusPoint: 0,
        items: [],
        equip: {}
    })
}

export const createUserData = (data) => {
    // TODO: confirm user is not saved
    store.save('user', data)
    return data;
}

export const modifyUserData = (data) => {
    store.save('user', data)
    return data;
}

export const getShopWeaponList = () => {
    return settings.shopWeaponList
}