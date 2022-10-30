import { View, Text, Animated, Dimensions, ScrollView } from "react-native";
import React from "react";
import searchDummy from "../constants/searchDummy";
import Walkthrough1 from "./walkthroughList/Walkthrough1";
import Walkthrough2 from "./walkthroughList/Walkthrough2";
import Walkthrough3 from "./walkthroughList/Walkthrough3";
import Walkthrough4 from "./walkthroughList/Walkthrough4";
import Walkthrough5 from "./walkthroughList/Walkthrough5";
import CreatorsCard from "../components/CreatorsCard";

const SearchScreen = () => {
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
    <>
      <View style={{ justifyContent: "center" }}>
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
            fontSize: 20,
            fontWeight: "500",
            padding: 10,
          }}
        >
          Ideas from creators
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <CreatorsCard duration="0:12" />
            <CreatorsCard duration="1.13" />
            <CreatorsCard duration="1:22" />
            <CreatorsCard duration="0:28" />
            <CreatorsCard duration="2:00" />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SearchScreen;
