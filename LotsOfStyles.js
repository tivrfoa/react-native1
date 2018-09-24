import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue
                    then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red then bigblue</Text>
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
});