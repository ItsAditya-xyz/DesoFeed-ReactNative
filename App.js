import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loader from "./Components/Loader";
import DesoApi from "./Components/API/desoAPI";
import { FlatList } from "react-native";
import TopTab from "./Components/TopTab";
import PostBox from "./Components/PostBox";

const da = new DesoApi();
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [followingFeed, setFollowingFeed] = useState(null);
  const [selfInfo, setSelfInfo] = useState(null);
  useEffect(() => {
    async function initApp() {
      const selfInfoRes = await da.getSelInfo();
      setSelfInfo(selfInfoRes);
      console.log("in test");
      const postStateless = await da.getPostsStateless();
      setFollowingFeed(postStateless.PostsFound);
      setIsLoading(false);
    }
    initApp();
  }, []);

  return (
    <View style={styles.container}>
      {selfInfo && <TopTab selfInfo={selfInfo} />}
      {isLoading ? (
        <View style={styles.containerCenter}>
          <Loader />
        </View>
      ) : (
        <View style={styles.feedContainer}>
          <FlatList
            data={followingFeed}
            renderItem={(itemData) => {
              if (itemData.item.RepostedPostEntryResponse === null) {
                return <PostBox info={itemData.item} />;
              }
            }}
          />
        </View>
      )}

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  topTab: {
    marginTop: 50,
  },
  container: {
    backgroundColor: "#fff",
  },
  bodyText: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  feedContainer: {},
  containerCenter: {
    marginTop: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
