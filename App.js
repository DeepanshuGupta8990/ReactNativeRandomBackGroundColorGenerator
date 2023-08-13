import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import { Button, SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const { width, height } = Dimensions.get("window");
  const [randomBackGround, setRandomBackGround] = useState("#ffffff");
  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let backGroundColor = '#';
    for (let i = 0; i < 6; i++) {
      backGroundColor += hexRange[Math.floor(Math.random() * hexRange.length)]
    }
    console.log(backGroundColor);
    setRandomBackGround(backGroundColor);
  }

  const fetchCopiedText = async () => {
    await Clipboard.setStringAsync(randomBackGround);
  };


  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#ffffff' />
      <View style={[styles.container, { width: width, height: height, backgroundColor: `${randomBackGround}` }]}>
        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: width / 2,
          height: 40, borderRadius: 10, backgroundColor: "black", marginBottom: 10,
        }}>
          <Text selectable style={[styles.txt, {color:'white'}]}>{randomBackGround}</Text>
        </View>
        <View style={{marginBottom:10}}>
        <Button title='Press me' onPress={generateColor} />
        </View>
        <View style={{marginBottom:10}}>
        <Button title='Copy color' onPress={fetchCopiedText} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
  }

});
