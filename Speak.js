import{View,Text,StyleSheet,Image,Button, Alert,ScrollView, TouchableOpacity} from 'react-native';
import  React  from 'react';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Speak =({navigation}) => {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");


  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      Alert.alert('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri=recording.getURI();
    console.log('Recording Stopped and Stored at',uri);
    
    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      
      return (
       
       
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
          <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
        </View>
        
        
      );
    });
  }
  return(
    <View style={styles.container}>
      <View style={styles.textWrapper}>
      <Text>{message}</Text>

      <View style={styles.center}>
      <TouchableOpacity style={[styles.microinput,{backgroundColor : recording? "#e82a2a":"#49d0f5",}, ]}
      onPress={recording ? stopRecording : startRecording}>
      <Image source={require("./assets/microphone.png")} style={{ resizeMode:'center'}}></Image>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonStyle}
      onPress={()=> navigation.navigate('RESULT-PAGE')}>
      <Text style={styles.buttonText}>Process</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
      {getRecordingLines()}
      </ScrollView>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  microinput:{
    paddingVertical:40,
    paddingHorizontal:50,
    marginBottom:20,
    width:150,
    height:150,
    borderRadius: 150/2,
    borderWidth:2,
  },
  container: {
    height: "100%",
    backgroundColor:"#e9eef0",
    
  },
  center: {
    alignItems:"center",
    
  },
  textWrapper: {
    height: hp('90%'), // 90% of height device screen
    width: wp('100%')   // 100% of width device screen
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  fill: {
    flex: 1,
    margin: 16,
    
  },
  button: {
    paddingRight:5,
  },
  buttonStyle:{
    borderWidth:1,
    backgroundColor:"#2c93b0",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius:10,   
    borderWidth:2,
},
  buttonText:{
    textAlign: 'center',
    marginVertical: 8,
    fontSize:20,
    fontFamily:"regular",
  }
})
export default Speak;