import React from "react";
import { View, StyleSheet } from "react-native";


const Viewer = ()=>{
     return(
         <View style={styleViewer.containerViewer}>

         </View>
     )
}


const styleViewer = StyleSheet.create({
    containerViewer : {
        height: 50, 
        width: '100%'
    }
})

export default Viewer;