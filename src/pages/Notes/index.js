import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import style from "./style";
import Save from "../../components/saveNote";
import Delete from "../../components/delNote";
import ModalNotification from "../../components/Notification";
import * as Notifications from "expo-notifications";

export default function Notes({ route, navigation }) {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState({
    title: "",
    note: "",
    date: date,
    notificationId: null,
  });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (route.params.note) {
      setNote(route.params.note);
    }
  }, []);

  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("You need to enable notifications permission to use this feature.");
      }
    }
    requestPermissions();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 20,
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Feather name="bell" size={24} color="green" />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [navigation, note]);

  return (
    <SafeAreaView style={style.conteiner}>
      <TextInput
        style={style.txtTitleNote}
        autoFocus={true}
        maxLength={40}
        value={note.title}
        placeholder={"Title"}
        placeholderTextColor={"#FF9001"}
        onChangeText={(text) => setNote({ ...note, title: text })}
      ></TextInput>
      <TextInput
        style={style.txtInput}
        multiline={true}
        value={note.note}
        placeholder={"Description"}
        placeholderTextColor={"#CDCDE0"}
        onChangeText={(text) => setNote({ ...note, note: text })}
      ></TextInput>
      <ModalNotification
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        date={date}
        setDate={setDate}
        note={note}
        setNote={setNote}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={[
            style.actionButton,
            {
              backgroundColor: "#D11A2A",
              flex: 1,
            },
          ]}
          onPress={() => Delete(note, navigation)}
        >
          <Feather name="trash-2" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.actionButton,
            {
              backgroundColor: "#93D976",
              flex: 1,
            },
          ]}
          onPress={() => Save(note, navigation)}
        >
          <Feather name="save" size={29} color="white" />
        </TouchableOpacity>
        <StatusBar backgroundColor="#161622" barStyle="light-content" />
      </View>
    </SafeAreaView>
  );
}
