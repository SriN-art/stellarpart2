import React from 'react'
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/stars.gif')}>
                    <View style={styles.titleBar}>
                <Text style={styles.titleText}>
                    Stellar App
                </Text>
                </View>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{
                    this.props.navigation.navigate('SpaceCraft')
                }}>
                    <Text style={styles.routeText}>Space Craft</Text>
                    <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{
                    this.props.navigation.navigate('StarMap')
                }}>
                    <Text style={styles.routeText}>Star Map</Text>
                    <Image source={require('../assets/star_map.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{
                    this.props.navigation.navigate('DailyPick')
                }}>
                    <Text style={styles.routeText}>Daily Pick</Text>
                    <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS==='android'?StatusBar.currentHeight:0
    },
    backgroundImage:{
        flex:1, resizeMode: 'cover'
    },
    titleBar:{
        flex:0.15, justifyContent: 'center', alignItems: 'center'
    },
    titleText: {fontSize:40, fontWeight: "bold", color: 'white'},
    routeCard:{flex:0.12, marginLeft:30, marginRight:30, margin:10, borderRadius:100, backgroundColor:'white', justifyContent: 'center',
alignItems:'center'},
    routeText:{fontSize:25, fontWeight:"bold", color:'black', alignItems:'center', justifyContent:'center'},
    knowMore:{paddingLeft:30, color: 'red', fontSize: 15},
    bgDigit:{position:'absolute', color: 'rgba(183,183,183,0.5)',fontSize:150, right:20, bottom: -15, zIndex:-1},
    iconImage:{position: 'absolute', height:80, width:80, resizeMode: "contain", right:-15, top:-20}
})