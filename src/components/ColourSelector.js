import React from 'react';
import "../styles/App.css"
import "../styles/Child.css"

const ColourSelector = (props) => {
  
  const { config, selectNextBackground } = props
  const { background, className } = config;
  
  return (
    <button className='buttton'  style={{backgroundColor: background}} onClick={() => selectNextBackground({background: background})}>
      {config.key}
    </button>
  )
}
export default ColourSelector;
