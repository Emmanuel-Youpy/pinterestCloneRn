import {
  View,
  Text,
  Animated,
  Dimensions,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import searchDummy from "../constants/searchDummy";
import Walkthrough1 from "./walkthroughList/Walkthrough1";
import Walkthrough2 from "./walkthroughList/Walkthrough2";
import Walkthrough3 from "./walkthroughList/Walkthrough3";
import Walkthrough4 from "./walkthroughList/Walkthrough4";
import Walkthrough5 from "./walkthroughList/Walkthrough5";
import CreatorsCard from "../components/CreatorsCard";
import PopularPins from "../components/PopularPins";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { colors } from "../constants/theme";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const SearchScreen = ({ navigation }) => {
  // const theme = { mode: "dark" };
  const { theme } = useContext(ThemeContext);

  let activeColor = colors[theme.mode];
  // const [searchData, setSearchData] = useState(second)
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const { width, height } = Dimensions.get("window");

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {searchDummy.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ["gray", "white", "gray"],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 2,
                width: 7,
                height: 7,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: -140,
          left: 0,
          right: 0,
          height: height * 0.2,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingVertical: height > 700 ? 24 : 20,
        }}
      >
        <Dots />
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: activeColor.backgroundColor1 }}
    >
      <View style={{ justifyContent: "center", backgroundColor: "red" }}>
        <Animated.FlatList
          data={searchDummy}
          keyExtractor={(item) => item.id}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          renderItem={({ item, index }) => {
            return (
              <>
                <View style={{ width: width, justifyContent: "center" }}>
                  {/* walkthrough images */}
                  <View style={{ justifyContent: "center" }}>
                    {index === 0 && <Walkthrough1 />}
                    {index == 1 && <Walkthrough2 />}
                    {index == 2 && <Walkthrough3 />}
                    {index == 3 && <Walkthrough4 />}
                    {index == 4 && <Walkthrough5 />}
                  </View>

                  {/* Title and Description */}
                  <View
                    style={{
                      //   height: height * 0.35,
                      position: "absolute",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingHorizontal: 24,
                      top: 90,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      //   backgroundColor: "black",
                      marginTop: -80,
                    }}
                  >
                    <Text style={{ color: "white", textAlign: "center" }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        marginTop: 10,
                        textAlign: "center",
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {item.desc}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    position: "absolute",
                    top: 50,
                    left: 20,
                    right: 0,
                    width: "90%",
                    backgroundColor: "white",
                    flexDirection: "row",
                    justifyContent: "space-between",

                    padding: 10,
                    borderRadius: 30,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>
                      <Octicons name="search" size={18} color="gray" />
                    </Text>
                    <TextInput
                      placeholder="Search"
                      style={{ paddingHorizontal: 10 }}
                    />
                  </View>
                  <Text>
                    <Fontisto name="camera" size={18} color="gray" />
                  </Text>
                </View>
              </>
            );
          }}
        />
        {renderFooter()}
      </View>
      {/* Creators card */}
      <View
        style={{
          justifyContent: "center",
          paddingTop: 10,
          paddingLeft: 5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "600",
            padding: 10,
            color: activeColor.textColor,
          }}
        >
          Ideas from creators
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <CreatorsCard
              duration="0:12"
              image="https://images.unsplash.com/photo-1666951195443-1a983a5a62d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJd36H7CI2WoJusFYFGlmhfbAw4TPwF1HL5zGhlQ9&s"
            />
            <CreatorsCard
              duration="0:44"
              image="https://images.unsplash.com/photo-1667026950732-fae2c3d2c776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              profileImage="https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg"
            />
            <CreatorsCard
              duration="0:12"
              image="https://images.unsplash.com/photo-1666914903444-484384691eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              profileImage="https://wallpaper.dog/large/20533903.jpg"
            />
            <CreatorsCard
              duration="0:56"
              image="https://images.unsplash.com/photo-1656702773363-989dec5bdd98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              profileImage="https://i.redd.it/qzbebva44ry21.jpg"
            />
            <CreatorsCard
              duration="1:02"
              image="https://images.unsplash.com/photo-1656381620321-bddff61435c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
              profileImage="https://wallpaperaccess.com/full/2213475.jpg"
            />
          </View>
        </ScrollView>
      </View>
      <Text
        style={{
          textAlign: "center",
          paddingBottom: 10,
          fontSize: 18,
          fontWeight: "600",
          color: activeColor.textColor,
        }}
      >
        Popular on Pinterest
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <PopularPins
          title="Saga"
          image="https://i2-prod.walesonline.co.uk/incoming/article24023657.ece/ALTERNATES/s615/1_HUNTED_HQ_Hunters-Celeb-2021_002njpgfrom-left.jpg"
          onPress={() => navigation.navigate("PopularView")}
        />
        <PopularPins
          title="Tattoos "
          image="https://w7.pngwing.com/pngs/627/952/png-transparent-tattos-thumbnail.png"
          onPress={() => navigation.navigate("PopularView")}
        />
        <PopularPins
          title="Piercing ideas"
          image="https://assets.teenvogue.com/photos/56f409fc060ad49149eebbf5/1:1/w_1995,h_1995,c_limit/tattoos-piercings.jpg"
          onPress={() => navigation.navigate("PopularView")}
        />
        <PopularPins
          title="Nature"
          image="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          onPress={() => navigation.navigate("PopularView")}
        />
        <PopularPins
          title="Fashion"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIu7WZOlA9vrbeVZSwxXeNS9f0gDM1wFmTg&usqp=CAU"
          onPress={() => navigation.navigate("PopularView")}
        />
        <PopularPins
          title="Sport"
          image="https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000"
          onPress={() => navigation.navigate("PopularView")}
        />
        <PopularPins
          title="Sky Diving"
          image="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/rs7639_thinkstockphotos-495468770-low.jpg?itok=PYg2qpzA"
          onPress={() => navigation.navigate("PopularView")}
        />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
