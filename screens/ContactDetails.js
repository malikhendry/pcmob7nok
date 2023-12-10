import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";

const ContactDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { ContactInfo } = route.params;

  
  const [contactDetails, setContactDetails] = useState(ContactInfo); 

  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
   
    setEditing(true);
  };

  const handleSave = () => {
   
    setEditing(false);
    
  };

  const handleDelete = () => {
   navigation.goBack() to return to the previous screen after deletion
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        value={contactDetails.name}
        onChangeText={(text) => setContactDetails({ ...contactDetails, name: text })}
        editable={editing}
      />
     
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
