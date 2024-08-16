import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Notifications from "expo-notifications";
import style from "./style";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const ModalNotification = ({
  modalVisible,
  setModalVisible,
  date,
  setDate,
  note,
  setNote,
}) => {
  const [showPicker, setShowPicker] = useState({
    showDate: false,
    showHours: false,
  });

  async function schedulePushNotification() {
    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: `Notification: ${note.title.substr(0, 40)}`,
        body: note.note.substr(0, 50),
        sound: "default", // Ensure sound is set to 'default'
      },
      trigger: {
        date: date,
      },
    });
    setNote({ ...note, notificationId: id });
  }

  const onChange = (event, selectedDate) => {
    setShowPicker({ showDate: false, showHours: false });
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const currentFormattedData = (type) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours();
    const min = date.getMinutes();
    if (type === "date") {
      return `${day}/${month}/${year}`;
    } else {
      return `${hours}:${min}`;
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={style.centeredView}>
        <View
          style={[
            style.modalView,
            { marginTop: Platform.OS === "ios" ? "85%" : "71%" },
          ]}
        >
          <Text style={{ color: "#CDCDE0" }}>Select Time and Date!</Text>
          <View>
            <Text style={{ textAlign: "center", color: "#FF8E01" }}>DATE</Text>
            <TouchableOpacity
              style={style.buttonHours}
              onPress={() => setShowPicker({ ...showPicker, showDate: true })}
            >
              <Text style={style.txtHours}>{currentFormattedData("date")}</Text>
            </TouchableOpacity>
            {showPicker.showDate && (
              <DateTimePicker mode="date" value={date} onChange={onChange} />
            )}
            <Text style={{ textAlign: "center", color: "#FF8E01" }}>TIME</Text>
            <TouchableOpacity
              style={style.buttonHours}
              onPress={() => setShowPicker({ ...showPicker, showHours: true })}
            >
              <Text style={style.txtHours}>{currentFormattedData("hours")}</Text>
            </TouchableOpacity>
            {showPicker.showHours && (
              <DateTimePicker mode="time" value={date} onChange={onChange} />
            )}
          </View>
          <View style={style.modalButtons}>
            <TouchableOpacity
              style={[style.button, style.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={style.txtStyle}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.button, style.buttonSave]}
              onPress={() => {
                schedulePushNotification();
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={style.txtStyle}>SET</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalNotification;
