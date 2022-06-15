import { useEffect,useState } from 'react';
import axios from 'axios';
import {TableCoins} from './/components/TableCoins.js';
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData=async()=>{
    const res=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=Z100&page=1&sparkline=false');
    setCoins(res.data);
  }
  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="container">
      <div className="row">
          <input type="text"
            class="form-control bg-dark border-0 mt-3 text-light fw-bold"aria-describedby="helpId" 
            placeholder="Search..." onChange={e=>{setSearch(e.target.value)}}/>
        <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
