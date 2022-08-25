import {ImageBackground,View,Text ,StyleSheet, TextInput, TouchableOpacity, Alert,ScrollView} from "react-native";
import React,{useState} from "react";
import CheckBox from "expo-checkbox";
import{
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import{
    JosefinSans_400Regular,
    JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import AppLoading from "expo-app-loading";

const ContactYoutube =({navigation})=> {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [agree, setAgree] = useState(false);
    const submit=()=>{
    if (userName=="ahad" && password =="abdulahad18"){
        navigation.navigate("HOME-PAGE");
    } else{
        Alert.alert('Username and Password are not correct!');
    }
};
    let [fontLoaded, error] = useFonts({
        bold: Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,
        regular:JosefinSans_400Regular,
        JosefinSans_500Medium,

    });
     if (!fontLoaded){
        return<AppLoading/>;
     }
    return(
        <View>
            <ImageBackground source={require("./assets/LoginBackground.jpg")} resizeMode="cover" style={styles.image}>
        <ScrollView style={styles.mainContainer}>
            <Text style={styles.mainHeader}>LOGIN!</Text>
                <Text style={styles.description}>Asalam-u-alaikum!</Text>
                <Text style={styles.description}>Welcome to Tajweed App.....</Text>
            <View style={styles.inputcontainer}>
                <TextInput style={styles.inputStyle} autoCapitalize="none" placeholder="Enter Your Name"
                autoCorrect={false}
                value={userName}
                onChangeText={(actualData)=>setUserName(actualData)}></TextInput>
            </View>
            <View style={styles.inputcontainer}>    
                <TextInput style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} 
                secureTextEntry={true} placeholder="Enter Your Password"
                value={password}
                onChangeText={(actualData)=>setPassword(actualData)}></TextInput>
            </View>
            <View style={styles.wrapper}>
                <CheckBox 
                    value={agree}
                    onValueChange={()=> setAgree(!agree)}
                    color={agree ? "#2c93b0" : undefined}
                    />     
                <Text style={styles.wrapperText}>
                    I have read and agree with terms...
                </Text>
                <TouchableOpacity style={[styles.buttonStyle,
                {backgroundColor : agree? "#2c93b0":"grey",}, ]}
                disabled={!agree}
                onPress={()=> submit()}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>   
        </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop:20,
        //backgroundColor:"#e9eef0",
    },
    
    mainHeader: {
        fontSize:45,
        paddingBottom: 10,
        fontFamily: "bold",
        textAlign:"center",
        color:'#fff',
    },
    
    description: {
        fontSize:20,
        color:"#fff",
        paddingBottom: 10,
        fontFamily: "regular",
    },
    inputcontainer : { 
        marginTop :20,
    },
    labels: {
        fontSize:18,
        color:"#7d7d7d",
        marginTop:5,
        marginBottom: 10,
        fontFamily:"regular",
    },
    inputStyle:{
        borderWidth:2,
        backgroundColor:"#9ce4f7",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius:10,
        fontFamily:"regular",
        fontSize: 18,
    },
    wrapper:{
        paddingTop:20,
    },
    wrapperText:{
        paddingTop:10,
        paddingBottom:20,
        color:"#fff",
        fontFamily:"regular",
    },
    buttonStyle:{
        borderWidth:2,
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius:10,   
    },
    buttonText:{
        textAlign: 'center',
        marginVertical: 8,
        fontSize:20,
        fontFamily:"regular",
    }

  }); 


export default ContactYoutube;