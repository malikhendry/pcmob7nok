import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ContactInfo = () => {
  const navigation = useNavigation();

  const contactsData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
   
  ];

  const [contacts, setContacts] = useState(contactsData);
  const [searchText, setSearchText] = useState('');

  const goToContactDetails = (contactId) => {
    const selectedContact = contacts.find((contact) => contact.id === contactId);
    navigation.navigate('ContactDetails', { ContactInfo: selectedContact });
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredContacts = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  return (
    <View>
      <SearchBar
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchText}
      />
      {contacts.map((contact) => (
        <TouchableOpacity
          key={contact.id}
          onPress={() => goToContactDetails(contact.id)}
        >
          <Text>{contact.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContactInfo;
