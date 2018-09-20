import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class State1 extends Component {

    constructor(props) {
        super(props);

        this.texto1 = 'Eleições 2018';
        this.texto2 = 'Quem vencerá';

        this.state = {
            buttonText : this.texto1,
            indicador : true,
        };
    }

    alterarTexto = () => {
        this.setState({
            buttonText : (this.state.indicador) ? this.texto1 : this.texto2,
            indicador : !this.state.indicador,
        });
    }

    render() {
        return (
            <Button title={this.state.buttonText}
                onPress={this.alterarTexto} />
        )
    }
}