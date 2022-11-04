import {
  View,
  Text,
  Animated,
  Dimensions,
  ScrollView,
  Image,
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

const SearchScreen = ({ navigation }) => {
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
    <ScrollView showsVerticalScrollIndicator={false}>
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
            fontSize: 18,
            fontWeight: "600",
            padding: 10,
          }}
        >
          Ideas from creators
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <CreatorsCard
              duration="0:12"
              image="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              profileImage="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              onPress={() => navigation.navigate("Creator")}
            />
            <CreatorsCard
              duration="0:12"
              image="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              profileImage="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              onPress={() => navigation.navigate("Creator")}
            />
            <CreatorsCard
              duration="0:12"
              image="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              profileImage="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              onPress={() => navigation.navigate("Creator")}
            />
            <CreatorsCard
              duration="0:12"
              image="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              profileImage="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              onPress={() => navigation.navigate("Creator")}
            />
            <CreatorsCard
              duration="0:12"
              image="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              profileImage="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1.jpg"
              onPress={() => navigation.navigate("Creator")}
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
        }}
      >
        Popular on Pinterest
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <PopularPins
          title="Saga"
          image="https://i2-prod.walesonline.co.uk/incoming/article24023657.ece/ALTERNATES/s615/1_HUNTED_HQ_Hunters-Celeb-2021_002njpgfrom-left.jpg"
          onPress={() => navigation.navigate("Creator")}
        />
        <PopularPins
          title="Tattoos "
          image="https://w7.pngwing.com/pngs/627/952/png-transparent-tattos-thumbnail.png"
          onPress={() => navigation.navigate("Home")}
        />
        <PopularPins
          title="Piercing ideas"
          image="https://assets.teenvogue.com/photos/56f409fc060ad49149eebbf5/1:1/w_1995,h_1995,c_limit/tattoos-piercings.jpg"
          onPress={() => navigation.navigate("Home")}
        />
        <PopularPins
          title="Nature"
          image="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          onPress={() => navigation.navigate("Home")}
        />
        <PopularPins
          title="Fashion"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIu7WZOlA9vrbeVZSwxXeNS9f0gDM1wFmTg&usqp=CAU"
          onPress={() => navigation.navigate("Home")}
        />
        <PopularPins
          title="Sport"
          image="https://ec.europa.eu/eurostat/documents/6921402/9104237/Shutterstock_Lisa_Kolbasa.png/f988f8b6-4138-4a91-9761-885bacab0ce2?t=1533725002000"
          onPress={() => navigation.navigate("Home")}
        />
        <PopularPins
          title="Sky Diving"
          image="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/rs7639_thinkstockphotos-495468770-low.jpg?itok=PYg2qpzA"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
