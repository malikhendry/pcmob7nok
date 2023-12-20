import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const AddScreen = () => {
  const [contactName, setContactName] = useState('');
  const [kinName, setKinName] = useState('');
  const [kinRelationship, setKinRelationship] = useState('');
  const [kinPhoneNumber, setKinPhoneNumber] = useState('');
  const [kinHomeNumber, setKinHomeNumber] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const handleSaveContact = () => {
    const newContact = {
      contactName,
      kinName,
      kinRelationship,
      kinPhoneNumber,
      kinHomeNumber,
      bloodGroup,
    };
  
    console.log('New Contact:', newContact);

    route.params.onSave(newContact);
    navigation.goBack();
  
   // navigation.navigate('ContactInfo', { contact: newContact });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Contact Name:</Text>
      <TextInput
        style={styles.input}
        value={contactName}
        onChangeText={(text) => setContactName(text)}
      />

      <Text style={styles.label}>Next of Kin Name:</Text>
      <TextInput
        style={styles.input}
        value={kinName}
        onChangeText={(text) => setKinName(text)}
      />

      <Text style={styles.label}>Relationship with Next of Kin:</Text>
      <TextInput
        style={styles.input}
        value={kinRelationship}
        onChangeText={(text) => setKinRelationship(text)}
      />

      <Text style={styles.label}>Next of Kin Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={kinPhoneNumber}
        onChangeText={(text) => setKinPhoneNumber(text)}
      />

      <Text style={styles.label}>Next of Kin Home Number:</Text>
      <TextInput
        style={styles.input}
        value={kinHomeNumber}
        onChangeText={(text) => setKinHomeNumber(text)}
      />

      <Text style={styles.label}>Blood Group:</Text>
      <TextInput
        style={styles.input}
        value={bloodGroup}
        onChangeText={(text) => setBloodGroup(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSaveContact}>
        <Text style={styles.buttonText}>Save Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 120, 
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddScreen;
