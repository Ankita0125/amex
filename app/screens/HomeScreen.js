import React from 'react';
import { View, StyleSheet, Image ,Text} from 'react-native';
import Screen from '../components/Screen';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

import { useDispatch } from 'react-redux';

import NavFavourites from '../components/NavFavourites';

// const GOOGLE_MAP_APIKEY = ""

const HomeScreen = () => {
    const dispatch = useDispatch()

    return (
        <Screen style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    source={{ uri: 'https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png' }}
                    style={styles.logo}
                />
                <View style={tw`mb-3`}>
                    <Text>HAVE A NICE DAY!</Text>
                </View>
                <NavOptions />
                <NavFavourites />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 300,
        resizeMode: 'contain',
        marginBottom: 20
    }
})

export default HomeScreen;
