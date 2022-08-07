import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectName, selectUser, setName } from "../slices/navSlice";
import { TouchableOpacity } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";

const ProfileScreen = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [editName, setEditName] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(isSelected);
  return (
    <SafeAreaView>
      <Text style={tw`text-center mb-12 mt-2 text-[24px]`}>
        Your Account <Text style={tw`text-blue-800`}>{user.name}</Text>
      </Text>
      <TouchableOpacity
        onPress={() => setIsSelected(!isSelected)}
        style={tw`bg-gray-300 w-50 mx-3 my-3`}
      >
        <View style={tw`mt-2 p-5`}>
          <Text style={tw`text-lg font-semibold`}>Show ROLE ?</Text>
          <Text style={tw`mt-2 text-[18px] text-blue-800`}>
            {isSelected && user.role}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity
          onPress={() => {
            setEditName(!editName);
          }}
          style={tw`bg-gray-300 w-50 mx-3 my-3`}
        >
          <View style={tw`mt-2 p-5`}>
            <Text style={tw`text-lg font-semibold`}>Change NAME</Text>
            <Text style={tw`mt-2 text-[18px] text-blue-800`}>
              Current name {user.name}
            </Text>
          </View>
        </TouchableOpacity>
        {editName && (
          <TextInput
            style={tw`h-15 w-40 mr-2 bg-gray-200 p-2`}
            placeholder="New Name"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
