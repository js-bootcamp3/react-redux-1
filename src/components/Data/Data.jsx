import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Data.css';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/actions'

export default function Data() {
  const dispatch = useDispatch()
  const baseURL = 'https://api.sampleapis.com/codingresources/codingResources';
  const data = useSelector((store => store.data));
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if (data.length > 0) return;

    try {
      const response = await axios.get(baseURL);
      dispatch(setData(response.data))
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Data</h1>
      <div>
        {data.map(item => (
            <a href={item.url} className="card-row" target="_blank" rel="noreferrer">
              <div className="card-item">{item.description}</div>
              <div className="card-item">{item.levels.join(', ')}</div>
              <div className="card-item">{item.topics.join(', ')}</div>
              <div className="card-item">{item.types.join(', ')}</div>
            </a>
          )
        )}
      </div>
    </div>
  )
}