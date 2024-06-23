import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={require("../assets/hero.png")} style={{height: "100%"}} />

        <View>
            {children}
        </View>

     </View>
  );
}

export default Background;