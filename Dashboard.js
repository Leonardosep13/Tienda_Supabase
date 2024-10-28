import React, { Component } from 'react';
import { View, Text , ScrollView , StyleSheet} from 'react-native';

export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <View style={Styles.container}>
            <ScrollView>
                <View style={Styles.header}>
                    <Text style={Styles.textHeader}> Bienvenido </Text>
                </View>
                
            </ScrollView>
            
        </View>
        );
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    header:{
        width:"100%",
        height:"auto",
        backgroundColor: "#FF9900",
        padding:"2%"
    },
    textHeader:{
        fontWeight:"bold",
        fontSize:60,
        color:"black",
        fontStyle:"italic",
    },
    textUserName:{
        fontSize: 20,
        fontWeight:"bold",
        color:"black"
    }
})