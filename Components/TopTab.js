import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function TopTab(props) {
  return (
    <View style={styles.topTab}>
      <View style={styles.FlexBox}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              marginRight: 10,
              fontSize: 20,
              color: "#186F8DCC",
              fontWeight: "bold",
            }}>
            @{props.selfInfo.username}
          </Text>
          <Image
            style={styles.profilePic}
            source={{
              uri: `https://node.deso.org/api/v0/get-single-profile-picture/${props.selfInfo.publicKey}?fallback=https://diamondapp.com/assets/img/default_profile_pic.png`,
            }}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={styles.Head1}>Following Feed</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topTab: {
    marginTop: 50,
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 1,
  },
  Head1: {
    fontSize: 18,
    fontWeight: "400",
  },
  FlexBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
