import React, { useState } from "react";
import { View, TextInput } from "react-native";
import style from "./style";

export default function SearchBar({ data, onChange }) {
  const [masterData, setMasterData] = useState(data);

  const search = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemTitle = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const titleSearch = text.toUpperCase();
        return itemTitle.indexOf(titleSearch) > -1;
      });
      onChange(newData);
    } else {
      onChange(masterData);
    }
  };

  return (
    <View style={style.searchArea}>
      <TextInput
        placeholder="Search Notes..."
        // placeholderTextColor={Colors.gray[100]} // Placeholder color
        style={style.searchInput}
        maxLength={50}
        onChangeText={(text) => search(text)}
      />
    </View>
  );
}
