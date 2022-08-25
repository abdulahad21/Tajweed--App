{/*import{View,Text,StyleSheet,ScrollView} from 'react-native';
import  React  from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Result =() => {

    
  return(
    
    <ScrollView style={styles.container}>
      <ScrollView style={styles.textWrapper}>
      
        <View style={{ paddingTop: 20, paddingBottom: 30,alignItems:"center"}}>
      <Text style={{ color: 'white', backgroundColor: '#255149', width: 300, fontSize: 25, textAlign: 'center', borderRadius: 30 }}>Recitation Result</Text>
      </View>
      
      <Text style={{ padding: 10 ,color: 'white', fontSize: 20}}>Correct Words</Text>
      <Text style={{ padding: 10 ,color: 'white', fontSize: 25 ,borderColor: 'white',borderWidth:1}}> قُلْ هُوَ ٱللَّهُ أَحَدٌ۝١ٱللَّهُ ٱلصَّمَدُ۝٢لَمْ يَلِدْ وَلَمْ يُولَدْ۝٣وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ۝٤</Text>
      
      <Text style={{ padding: 10 ,color: 'white', fontSize: 20}}>Yours Recited Words</Text>
      
      <Text style={{marginBottom: 30 , padding: 10 ,color: 'white', fontSize: 25,borderColor: 'white',borderWidth:1}}>قُلْ هُوَ ٱللَّهُ أَحَدٌ۝١ٱللَّهُ ٱلصَّمَدُ۝٢لَمْ يَلِدْ وَلَمْ يُولَدْ۝٣وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ۝</Text>
      </ScrollView>
      </ScrollView>
      
      
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#081B22',
      padding:20,
      paddingHorizontal: 0,
      
    },
    textWrapper: {
      height: hp('80%'), // 80% of height device screen
      width: wp('100%'),  // 100% of width device screen
      padding :20,
    },
})
export default Result;*/}

// Importing modules


{/*import React, { useState, useEffect } from "react";
import { View,Text } from "react-native";

  
const Result=()=> {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        name: "Ahad",
        age: 5,
        date: "23/08/2022",
        programming: "Python",
    });
  
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    name: data.Name,
                    age: data.Age,


                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);
  
    return (
        <View >
            <View >
                <Text>React and flask</Text>
                {/* Calling a data from setdata for showing 
                <Text>{data.name}</Text>
                <Text>{data.age}</Text>
                <Text>{data.date}</Text>
                <Text>{data.programming}</Text>
  
            </View>
        </View>
    );
}
  
export default Result;*/}



import{View,Text,StyleSheet,ScrollView,Button} from 'react-native';
import  React  from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Result extends React.Component {
  state={
    data:{"Date":"Loading..."}
  }
  getJsonData=()=> {
    fetch("http://192.168.0.107:5000/data",
    {method:'GET'}).then((response)=> response.json())
    .then ((responseJson)=>{
      console.log(responseJson);
      this.setState({
        data:responseJson
      })
    })
    .catch((error)=>{
      console.error(error)
    });
  }
  componentDidMount=() => {
    this.getJsonData()
  }

  render () {
    return(
    
      <View style={styles.container}>
       <View>
        <Text style={{margin:10,fontSize:16}}>Suggestion</Text>
        <Text style={{margin:10,fontSize:22}} selectable={true}>{this.state.data['Date']}</Text>
        <Text style={{margin:10,fontSize:16}}>{'Name:' + this.state.data['Name']}</Text>
        <Text style={{margin:10,fontSize:16}}>{'Age:' + this.state.data['Age']}</Text>
        <Text style={{margin:10,fontSize:16}}>{'Programming:' + this.state.data['programming']}</Text>
       </View>
       <View style={{position:'absolute',bottom:20,width:'100%'}}>
        <Button onPress={this.getJsonData} title='PREES ME!'></Button>
       </View>
        </View>
        
        
      
    );
  }  
  
}
const styles = StyleSheet.create({
   container:{
      margin:20,
      flex:1,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'flex-start',  
   },
})


