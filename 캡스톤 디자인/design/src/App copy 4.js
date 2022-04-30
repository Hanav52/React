import {useState, useEffect} from "react";


function App() {
  const [loading, setLoading] = useState(true); // loading 글자를 띄울지 말지를 결정하는 함수
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // 정보를 가져올 url
    .then((response) => response.json()) // url에서 가져온 정보를 json으로 변환
    .then((json) => {
      setCoins(json); // 변환된 json을 coins(빈 array)에 넣기
      setLoading(false); // loading 글자 지우기
    });
  }, [])
  return (
    <div>
      <h1>the coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>loading</strong> : 
      <select>
        {coins.map((coin) => 
        <option>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
        </option>)}
      </select>}
      
    </div>
  );
}

export default App;
