import React, {Component,  useState } from "react";
import { View, SafeAreaView, StyleSheet, Text , TextInput, TouchableOpacity } from "react-native";


const App = () =>{
    

    const [numero, setNumero] = useState(0)
    return(
        <View style={estilos.paraelview}>

            <Text style={estilos.paratext}>Hola a todos , veamos como sumar</Text>

            <View style={estilos.viewhijo}>
                <TouchableOpacity onPress={()=>setNumero(numero - 1)}>
                    <Text style={estilos.textnumeros}>-</Text>
                </TouchableOpacity>

                <Text style={estilos.textnumeros}>{numero}</Text>

                <TouchableOpacity onPress={()=>setNumero(numero + 1)}>
                    <Text style={estilos.textnumeros}>+</Text>
                </TouchableOpacity>
            </View>

            

        </View>
    )

}


const estilos = StyleSheet.create({

    paraelview : {
        flex:1, 
        justifyContent: 'center', 
        alignItems:'center'
    }, 
    paratext:{
            backgroundColor: 'black', 
            color:'white'
    }, 
    viewhijo:{
        flexDirection:"row"
    }, 
    textnumeros:{
        fontSize:25, 
        padding:4
    }
  
})



export default App;