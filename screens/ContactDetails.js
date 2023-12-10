import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";

const ContactDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { ContactInfo } = route.params;

  // Dummy contact details (replace with actual data retrieval logic)
  const [contactDetails, setContactDetails] = useState(ContactInfo); // Use ContactInfo directly

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    // Logic to enable editing
    setEditing(true);
  };

  const handleSave = () => {
    // Logic to save updated details
    setEditing(false);
    // Call API or update state, etc.
  };

  const handleDelete = () => {
    // Logic to delete the contact
    // Call API or perform necessary actions
    // For example, navigation.goBack() to return to the previous screen after deletion
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        value={contactDetails.name}
        onChangeText={(text) => setContactDetails({ ...contactDetails, name: text })}
        editable={editing}
      />
      {/* Other TextInput fields for contact details */}
      
      {editing ? (
        <TouchableOpacity onPress={handleSave}>
          <Text>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleEdit}>
          <Text>Edit</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactDetails;
