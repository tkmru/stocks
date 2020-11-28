//import logo from './logo.svg';
//import './App.css';

function Tile(props) {
  return (
    <div class="tile is-4">
      <article class="tile is-child notification is-primary">
        <p class="title">{props.result['longName']}</p>
        <p class="subtitle">{props.result['symbol']}, {props.result['fullExchangeName']}({props.result['marketState']})</p>
        <p class="subtitle">Price:
        <div class="content">
        {props.result['regularMarketPrice']}{props.result['currency']}
        </div>
        </p>
        <p class="subtitle">Target Price: 
          <div class="content">
            High: {props.result['targetPriceHigh']}{props.result['currency']}<br/>
            Low: {props.result['targetPriceLow']}{props.result['currency']}
          </div>
        </p>
        <p class="subtitle">Trend: 
          <div class="content">
            Mid Term: {props.result['pageViews']['midTermTrend']}<br/>
            Long Term: {props.result['pageViews']['longTermTrend']}<br/>
            Short Term: {props.result['pageViews']['shortTermTrend']}<br/>
          </div>
        </p>
      </article>
    </div>);
}

export default Tile;
