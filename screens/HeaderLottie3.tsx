import * as React from "react";
import {StyleSheet, View} from "react-native";
import LottieView  from 'lottie-react-native';

export default function HeaderLottie3() {
    return(
        <View style={styles.lottieContainer2}>
            <LottieView
            style={{flex: 1}}
            source={require('../assets/Lotties/82636-pets.json')}
            loop={true}
            autoPlay={true}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    lottieContainer2: {
        flex: 0.4,
        alignItems: 'center'
    }
})