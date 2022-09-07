import React, {useState, useEffect} from 'react';
import './Data.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/actions'

export default function Data() {
  const dispatch = useDispatch()
  const data = useSelector((store => store.data));
  const loading = useSelector((store => store.dataLoading));
  
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div>
      <h1>Data</h1>
      {loading && <div>Loading ...</div>}
      {!loading && data.length > 0 && <div>
        {data.map(item => (
            <a key={item.id} href={item.url} className="card-row" target="_blank" rel="noreferrer">
              <div className="card-item">{item.description}</div>
              <div className="card-item">{item.levels.join(', ')}</div>
              <div className="card-item">{item.topics.join(', ')}</div>
              <div className="card-item">{item.types.join(', ')}</div>
            </a>
          )
        )}
      </div>}
    </div>
  )
}