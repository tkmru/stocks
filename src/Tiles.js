//import logo from './logo.svg';
import './Tiles.css';
import Tile from './Tile.js';
import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

var $ = require('jquery');

function Tiles(props) {
  const symbolArgs = new URLSearchParams(props.location.search).get('symbols');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [result, setResult] = useState([]);
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols="+symbolArgs,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "de40c01ca1mshebfd6541116a023p185831jsn793176dff3dc"
    }
  }
  
  useEffect(() => {
    $.ajax(settings).done(function (response) {
      setIsLoaded(true);
      console.log(response);
      setResult(response['quoteResponse']['result']);
    }).fail(function (error) {
      setIsLoaded(true);
      setError(error);
    });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    let resultRows = [];
    for (let i = 0; i < result.length; i=i+3) {
      let end = i + 3;
      if (end > result.length) {
        end = result.length
      }
      resultRows.push(
        result.slice(i, end)
      )
    }
    console.log(result);
    return (
      <div>
      {
        resultRows.map((results) => {
          return (
            <div class="tile is-horizon">
              { 
                results.map((result) => {
                  return (<Tile result={result} />)
                }) 
              }
            </div>
          )})
        }
      </div>
    );
  }
}

export default withRouter(Tiles);
