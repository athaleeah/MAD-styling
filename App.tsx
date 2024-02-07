import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  StyleSheet, 
  ScrollView 
} from 'react-native';

export const gambar = [
  {
    id: 1,
    url: {
      uri: 'http://vignette4.wikia.nocookie.net/poohadventures/images/6/62/Doraemon_2005.jpg/revision/latest?cb=20150908221112',
    },
    title: 'doraemon',
  },
  {
    id: 2,
    url: {
      uri: 'https://tse4.mm.bing.net/th?id=OIP.5qoDss5t7yG0Tkee8B_nwgHaHa&pid=Api&P=0&h=220',
    },
    title: 'doraemon and nobita',
  },
  {
    id: 3,
    url: {
      uri: 'https://tse3.mm.bing.net/th?id=OIP.u4J-JUvE3v65qWSWX-VNRQHaJ9&pid=Api&P=0&h=220',
    },
    title: 'doraemon pe ade',
  },
  {
    id: 4,
    url: {
      uri: 'https://tse3.mm.bing.net/th?id=OIP.eXGv6QroARkcxQEYwWZjIAHaHu&pid=Api&P=0&h=220',
    },
    title: 'doraemon blushing',
  },
];

export default function doraemon() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#FFFFFF' // Set text color to white
        }}>
        Cerita
      </Text>
      <ScrollView horizontal={true}>
        {gambar.map(item => {
          return (
            <View style={styles.imageCard} key={item.id}>
              <Image source={item.url} style={styles.image} />

              <Text style={styles.titleStyle}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        style={styles.search}
        placeholder="Cari Gereja"
        placeholderTextColor={'#A4B0BD'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F363F', 
    padding: 8,
  },
  imageCard: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 100,
  },

  titleStyle: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    fontStyle: 'italic',
    marginRight: 15,
    color: '#FFFFFF' 
  },
  search: {
    height: 44,
    backgroundColor: '#F1EFEF',
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 5,
    marginHorizontal: 10,
    paddingLeft: 10,
    color: '#2F363F',
  }
});
