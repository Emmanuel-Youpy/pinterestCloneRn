import { View, Text, Switch, TouchableOpacity } from "react-native";
import React from "react";
import SettingComp from "../components/SettingComp";
import { useState } from "react";
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { MaterialIcons } from '@expo/vector-icons';
import SettingComp2 from "../components/SettingComp2";
import { useNavigation } from "@react-navigation/native";


const SettingsScreen = () => {
  const navigation = useNavigation();

  const { theme , updateTheme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const [isActive, setIsActive] = useState(theme.mode ==='dark');
  const handleSwitch = () => {
    updateTheme();
    setIsActive((previousState) => !previousState);
  };
  return (
    <View
      style={{
        paddingTop: 40,
        backgroundColor: activeColor.backgroundColor1,
        height: "100%",
        width: "100%",
        paddingHorizontal: 20,
      }}


    >
      <View style={{ paddingTop: 10 ,flexDirection:'row', alignItems:'center' }}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Text style={{ color: "white",  fontWeight: "bold" , paddingRight:10 ,  }} >
        <MaterialIcons name="keyboard-arrow-left" size={34} color={activeColor.textColor} />
        </Text></TouchableOpacity>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" , color: activeColor.textColor  }}>
          Settings
        </Text>
      </View>
      <Text
        style={{ color: "white", fontSize: 20, fontWeight: "bold", left: 10 , color: activeColor.textColor , paddingTop:20}}
      >
        User
      </Text>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <SettingComp2 name="Name" label="Youpil" />
        <SettingComp2 name="Joined" label="07/12/22" />
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          left: 10,
          paddingTop: 20,
           color: activeColor.textColor 
        }}
      >
        Theme
      </Text>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "95%",
            // backgroundColor: activeColor.backgroundColor3,
            padding: 20,
            borderRadius: 20,
            marginTop: 10,
            borderColor:'lightgray', 
            borderWidth:0.5
          }}
        >
          <Text style={{color:activeColor.textColor}}>Dark mode</Text>
          <Switch
            value={isActive}
            onValueChange={handleSwitch}
            thumbColor={isActive ? "white" : "gray"}
            ios_backgroundColor={"lightgray"}
            trackColor={{
              false: "red",
              true: "gray",
            }}
          />
        </View>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          left: 10,
          paddingTop: 20,
           color: activeColor.textColor 
        }}
      >
        System
      </Text>
      <View style={{ alignItems: "center", paddingTop: 10 }}>
        <SettingComp label="Light" icon="lightbulb-on" isActive={theme.mode === 'light' && !theme.system} onPress={()=>updateTheme({mode:'light'})} />
        <SettingComp label="Dark" icon="weather-night" isActive={theme.mode === 'dark' && !theme.system} onPress={()=>updateTheme({mode:'dark'})}/>
        <SettingComp label="System" icon="theme-light-dark" isActive={theme.system} onPress={()=>updateTheme({system:true})}/>
      </View>
    </View>
  );
};

export default SettingsScreen;
