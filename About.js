import{ImageBackground,View,Text,StyleSheet,ScrollView,TouchableOpacity,Alert} from 'react-native';
import  React  from 'react';
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

const About =() => {

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
    
      <View style={styles.maincontainer}>
      <ImageBackground source={require("./assets/InfoBackground.jpg")} resizeMode="cover" style={styles.image}>
    <ScrollView style={styles.container}>
      
      <View style={{ paddingTop: 10, paddingBottom: 30,alignItems:"center"}}>
      <Text style={{ color: 'white', backgroundColor: '#2c93b0', width: 300, fontSize: 25, textAlign: 'center',borderWidth:2, borderRadius: 30 }}>ABOUT US</Text>
      </View>
      <Text style={{fontFamily: "bold",fontSize:25}}>SALAM,</Text>
      <Text style={{fontFamily: "bold",fontSize:25}}>Welcome To Tajweed App.</Text>
      <Text style={{fontFamily: "bold",fontSize:25}}>Our main Objective of this app is to correct the mistakes of tajweed.</Text>
      <Text style={{fontFamily: "bold",fontSize:25}}> السلامُ علیکم-</Text>
      <Text style={{fontFamily: "bold",fontSize:25}}> التجوید ایپ میں خوش آمدید-</Text>
      <Text style={{fontFamily: "bold",paddingBottom:20,fontSize:25}}> ہماری ایپ کا مقصدلوگوں کی قرآن کریم کی تجویدکی غلطیوں کو درست کرنا ہے۔</Text>
      <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Alert.alert('Thank You For Contact Us.')}>
                    <Text style={styles.buttonText}>CONTACT US</Text>
      </TouchableOpacity>
      <Text style={{fontFamily: "bold",paddingBottom:20,fontSize:25}}>VISIT OUR WEBSITE;</Text>
      <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Alert.alert('Welcome To Our Website')}>
                    <Text style={styles.buttonText}>www.TajweedApp.com</Text>
      </TouchableOpacity>
      <Text style={{fontFamily: "bold",paddingBottom:20,fontSize:25}}>For any Kind of Question, Feedback or any Complain send your mail at;</Text>
      <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Alert.alert('Thank You For Mail Us.')}>
                    <Text style={styles.buttonText}>support@tajweedapp.com</Text>
      </TouchableOpacity>
     
    </ScrollView>
    </ImageBackground>
    </View>
    
)
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    //backgroundColor: '#e9eef0',
    padding: 10,  
    paddingHorizontal: 30, 
  },
  buttonStyle:{
    padding:10,
    textAlign:"center",
    backgroundColor: '#2c93b0',
    borderRadius:10,
    marginBottom:20,
    borderWidth:2,  
},
  buttonText:{
    textAlign: 'center',
    fontSize:25,
    color: '#fff',
  },
 

});
export default About;