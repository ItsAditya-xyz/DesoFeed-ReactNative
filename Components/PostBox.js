import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function PostBox(props) {
  return (
    <View
      style={{
        borderBottomColor: "#E7E7E7",
        width: "100%",
        borderBottomWidth: 1,
        padding: 14,
        flexDirection: "row",
      }}>
      <Image
        style={styles.profilePic}
        source={{
          uri: `https://node.deso.org/api/v0/get-single-profile-picture/${props.info.PosterPublicKeyBase58Check}?fallback=https://diamondapp.com/assets/img/default_profile_pic.png`,
        }}
      />
      <View style={styles.grid2}>
        <Text style={styles.username}>
          {props.info.ProfileEntryResponse.Username}
        </Text>
        <View>
          <Text style={styles.bodyText}>{props.info.Body}</Text>
          {props.info.ImageURLs !== null ? (
            <>
              <Image
                style={styles.postImage}
                source={{
                  uri: props.info.ImageURLs[0] || props.info.ImageURLs[1] || props.info.ImageURLs[2],
                }}
              />
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 1,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  grid2: {
    flexDirection: "column",

    marginLeft: 10,
    width: "80%",
    height: "100%",
  },
  postImage: {
    alignSelf: "center",
    width: "96%",
    height: 300,
    borderRadius: 10,
  },
  bodyText: {
    width: "100%",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexWrap: "wrap",
  },
});
