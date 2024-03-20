import { useState } from 'react';
import {StyleSheet, Text, View,  FlatList, Switch} from 'react-native';

const data = [
  {id: 0, name:'cafe.exe', isFavorite: true},
  {id: 1, name:'KafeKafe', isFavorite: false},
  {id: 2, name:'BugG', isFavorite: false},
  {id: 3, name:'Rock in Code', isFavorite: true},
  {id: 4, name:'do(drink)', isFavorite: false},
  {id: 5, name:'esc', isFavorite: false},
]
export default function UseState1() {

    const [cafeList, setCafeList] = useState(data)
    const[showOnlyFavorites, setShowOnlyFavorites] = useState(false)
    
    function onFavoritesChange(isFavotiteSelected){
      setShowOnlyFavorites(isFavotiteSelected);
    
      isFavotiteSelected ? 
       setCafeList(cafeList.filter(cafe => cafe.isFavorite)):
       setCafeList(data)
    }
      return (
      <View style={styles.container}>
        <Text>Yalnızca favorileri göster</Text>
        <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange}/>
        <FlatList data={cafeList} renderItem={({item}) => <Text style={styles.tetx}>{item.name}</Text>}/>
        </View>
        
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin:40
    },
    tetx: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });