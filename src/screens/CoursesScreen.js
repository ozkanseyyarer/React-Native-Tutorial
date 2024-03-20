import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

export default function CoursesScreen() {
  const courses = [
    {name: 'Angular', id: 1},
    {name: 'React Js', id: 2},
    {name: 'Özkan', id: 3},
    {name: 'Mehmet', id: 4},
    {name: 'Hasan', id: 5},
  ];
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      data={courses}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <Text style={styles.content}>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: 'yellow',
    marginVertical: 5,
    padding: 50,
  },
});
