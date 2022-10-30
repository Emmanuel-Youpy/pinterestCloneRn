import { View, Text, Animated, Dimensions } from "react-native";
import React from "react";
import searchDummy from "../constants/searchDummy";
import Walkthrough1 from "./walkthroughList/Walkthrough1";

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
            outputRange: ["yellow", "red", "yellow"],
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
          bottom: 0,
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
    <View style={{}}>
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
              </View>
              {/* Title and Description */}
              <View
                style={{
                  //   height: height * 0.35,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 24,
                  backgroundColor: "black",
                  marginVertical: 100,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  {item.name}
                </Text>
                <Text
                  style={{ marginTop: 10, textAlign: "center", color: "red" }}
                >
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
      <Text style={{ color: "red" }}>NotificationScreen</Text>
    </View>
  );
};

export default SearchScreen;
