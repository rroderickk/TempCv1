import React from "react";
import Dataset from "../components/Dataset";

const useFirstHook =()=> {
  const [searchValue, setSearchValue] = React.useState('');

  let searchedText = [];

  if (!searchValue.length >= 1) { searchedText = Dataset.assets; } 
    else {
    searchedText = Dataset.assets.filter(obj => {
      const todoText = obj.idENG.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  return {
    searchValue,
    setSearchValue, 
    searchedText,
  } 

}; export default useFirstHook;