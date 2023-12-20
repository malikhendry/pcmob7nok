import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ContactInfo = () => {
  const navigation = useNavigation();

  const contactsData = [
    { id: '1', name: 'Alan Phua', phone: '91887455' },
    { id: '2', name: 'Cindy', phone: '98763244' },
  ];

  const [contacts, setContacts] = useState(contactsData);
  const [searchText, setSearchText] = useState('');

  

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredContacts = contactsData.filter((contact) => 
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  const onContactAdded = (data) => {
    setContacts([...contacts, { name: data.contactName }]);
  };

  const handleAddButtonPress = () => {
    navigation.navigate('AddScreen', {
      onSave: onContactAdded
    });
  }


  const renderContact = ({ item }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => navigation.navigate('ContactDetails', { contact: item })}
    >
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
        <Text style={styles.addButtonText}>+</Text>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>

      <View style={[styles.searchContainer, { marginTop: 40 }]}>
       
        <SearchBar
          placeholder="Search contacts..."
          onChangeText={handleSearch}
          value={searchText}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInput}
          inputStyle={styles.searchBarText}
        />
      </View>

      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  addButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  searchContainer: {
   
  },
  contactItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    color: '#888',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingBottom: 5,
  },
  searchBarInput: {
    backgroundColor: '#f5f5f5',
  },
  searchBarText: {
    color: 'black',
  },
});

export default ContactInfo;
