import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Olá {this.props.name}!</Text>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Leonardo' />
                <Greeting name='Roseli' />
                <Greeting name='Marco' />
            </View>
        );
    }
}