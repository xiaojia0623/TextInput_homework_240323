import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  //phone
  const [phoneNum , setPhoneNum] = useState('')
  //myPassword & passwordComfirm
  const [myPassword, setMyPassword] = useState('')
  const [passwordComfirm, setPasswordComfirm] = useState('')


  const warningAlert = (title, messageContent) => {
    Alert.alert(title, messageContent, [
      {
        text: '取消',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: '好的', onPress: () => console.log('OK Pressed')},
    ]);
  }

  const inputComfirmValid = () => {
    if (phoneNum === ''){
      warningAlert('提醒!!', '\n請填寫電話，謝謝!')
    }else if (myPassword == '' || passwordComfirm == ''){
      warningAlert('提醒!!', '\n資料請填寫完整，謝謝')
    }else if(myPassword != passwordComfirm){
      warningAlert('提醒!!', '\n密碼不一致，請填寫正確')
    }else{
      warningAlert('恭喜!',' 資料正確!!')
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#33FFC1', 'transparent']}
        style={styles.background}
      />
      <Text style={styles.h1TextStyle}>Register</Text>
      <Text style={styles.labelTextStyle}>電話:</Text>
      <TextInput style={styles.myTextInput} onChangeText={(phoneNum) => setPhoneNum(phoneNum)} keyboardType="phone-pad" maxLength={10} placeholder='請輸入電話'/>
      <Text style={{marginBottom:15}}>您輸入的電話是:{phoneNum} </Text>

      <Text style={styles.labelTextStyle}>密碼:</Text>
      <TextInput style={styles.myTextInput} onChangeText={(myPassword) => setMyPassword(myPassword)} keyboardType="default" secureTextEntry={true} placeholder='請輸入密碼' maxLength={10}/>

      <Text style={styles.labelTextStyle}>請再輸入一次密碼:</Text>
      <TextInput style={[ styles.myTextInput, { marginBottom: 20 } ]} onChangeText={(passwordComfirm) => setPasswordComfirm(passwordComfirm)} keyboardType="default" secureTextEntry={true} placeholder='請輸入密碼' maxLength={10}/>
      <View style={{width: '50%', borderRadius:15,}}>
        <Button style={styles.buttonStyle} title='確定' onPress={inputComfirmValid}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
  h1TextStyle:{
    fontSize:28,
  },
  labelTextStyle:{
    fontSize:20,
  },
  myTextInput:{
    height:50,
    width:300,
    borderRadius:0,
    borderRadius:5,
    backgroundColor:'#F5F1F1',
    color:'gray',
    fontSize:20,
    textAlign:'center',
  },
  buttonStyle:{
    paddingVertical: 12,
    paddingHorizontal: 32,
    fontSize:30,
    backgroundColor:'pink',
    borderRadius:10,
  },
});
