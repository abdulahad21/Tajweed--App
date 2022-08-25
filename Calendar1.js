import{ ImageBackground,View, StyleSheet} from 'react-native';
import  React from 'react';
import { Calendar} from 'react-native-calendars';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Calendar1=() => {
  return(
    <View style={styles.main}> 
    <ImageBackground source={require("./assets/CalendarBackground.jpg")} resizeMode="cover" style={styles.image}>
    <View style={styles.textWrapper}>
    <Calendar></Calendar>
    
   </View>
   </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
      height: "100%",
      backgroundColor:"#FFFFFF",
  },
  textWrapper: {
    height: hp('90%'), // 70% of height device screen
    width: wp('100%')   // 100% of width device screen
  },
})

export default Calendar1;