import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function TabOne() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Ionicons
              color="white"
              style={styles.icon}
              name="settings-outline"
            />
          ),
          headerLeft: () => (
            <View>
              <></>
            </View>
            // <FAB
            //   title="订阅"
            //   size="small"
            //   color="rgb(250, 210, 128)"
            //   titleStyle={{ color: "black" }}
            //   icon={{
            //     name: "add-circle",
            //     color: "black",
            //   }}
            // />
          ),
          headerTitleAlign: "center",
          headerTitle: "AI聊天",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "rgb(19, 22, 32)",
            //   backgroundColor:
            //     "rgb(22,35,67), radial-gradient(circle, rgba(22,35,67,1) 0%, rgba(19,22,31,1) 26%)",
          },
        }}
      />

      <View style={styles.main}>
        <View style={styles.card}>
          <View style={styles.cardTitleContainer}>
            <Ionicons
              color="white"
              style={styles.icon}
              name="settings-outline"
            />

            <Text style={styles.cardTitle}>语言翻译</Text>
          </View>

          <View style={styles.cardBox}>
            <Text style={styles.cardBoxText}>how to use</Text>
          </View>
        </View>
        {/* <View style={styles.bottomSVG} /> */}
      </View>
    </View>
  );
}

export default TabOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: "rgb(19, 22, 32)",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  search: {
    flexDirection: "row",
  },
  bottomSVG: {
    height: 100,
    background: "rgb(22,35,67)",
    backgroundColor:
      "radial-gradient(circle, rgba(22,35,67,1) 0%, rgba(19,22,31,1) 23%)",

    // background: "rgb(22,35,67)",
    // backgroundColor:
    //   "radial-gradient(circle, rgba(22,35,67,1) 0%, rgba(19,22,31,1) 26%)",
  },
  icon: {
    fontSize: 20,
  },
  card: { paddingHorizontal: 10 },
  cardTitle: { color: "white", marginLeft: 10 },
  cardTitleContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  cardBox: {
    padding: 20,
  },
  cardBoxText: {
    color: "gray",
  },
});
