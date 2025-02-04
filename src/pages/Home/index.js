import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StatusBar,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "../../components/SearchBar";
import Style from "./style";
import Colors from "../../styles/colors";
import Notes from "../../components/RenderNotes";

export default function Home({ navigation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      const getData = async () => {
        try {
          let notes = await AsyncStorage.getItem("notes");
          if (notes === undefined || notes === null) {
            notes = "[]";
          }
          if (notes.length > 0 && notes[0] !== "[") {
            notes = `[${notes}]`;
          }
          setData(JSON.parse(notes));
          setLoading(false);
        } catch (err) {
          console.log(err);
          alert("Error loading notes");
        }
      };
      getData();
    }, [])
  );

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color={Colors.loading} />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={Style.container}>
        <Text style={Style.txtTitle}>Cosmic-Notes-App</Text>
        <SearchBar data={data} onChange={setData} />
        <FlatList
          ListEmptyComponent={<Text style={Style.emptyText}>No Data!</Text>}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <Notes item={item} navigation={navigation} />;
          }}
        />
        <TouchableOpacity
          style={Style.newNoteButton}
          onPress={() => navigation.navigate("Notes", { search: false })}
        >
          <AntDesign
            name="pluscircle"
            size={60}
            style={Style.addButtonIcon}
          />
          <StatusBar backgroundColor='#161622' barStyle = 'light-content'/>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
