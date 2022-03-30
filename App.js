import { StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import React from "react";

export default function App(){
    return (
        <View>
            <View style = {styles.container}>
                <Text>Hello World!</Text>
            </View>
            <Button title="HELLO" onPress={() => alert("Hello")}/>


            <View>
                <PressableOpacity text="Allo"/>
            </View>


        </View>
);
}

class PressableOpacity extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({count: this.state.count + 1})}>
                    <Text>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
                <Text>You clicked {this.state.count} times</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFill,
        width: 100,
        height: 75,
        backgroundColor: 'blue',
    },
    pressable: {
        backgroundColor: 'blue',
        width: 100,
        height: 75,
    }
});