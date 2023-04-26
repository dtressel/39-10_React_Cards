import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  }
  return [isFacingUp, flipCard];
}

// useAxios returns a list of data and a function to add new data via an AJAX request to a URL
const useAxios = (base_url) => {
  const [data, setData] = useState([]);
  const addNewData = async (rest_url = '') => {
    console.log(base_url + rest_url);
    const response = await axios.get(base_url + rest_url);
    setData(data => [...data, { ...response.data, id: uuid() }]);
  }
  return [data, addNewData];
}

export { useFlip, useAxios };