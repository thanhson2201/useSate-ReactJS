  // ! Counter
function App() {
  
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, curr) => total + curr);
    return total;
  });

  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

//! Info
function App() {
	  const [info, setInfo] = useState({
    name: 'Tran Thanh Son',
    age: 20,
    address: 'Ha Noi'
  });

  const handleInfo = () => {
    setInfo(prevState => ({
      ...prevState,
      bio: 'yeu code'
    }));
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h5>{JSON.stringify(info)}</h5>
      <button onClick={handleInfo}>Update</button>
    </div>
  );
}

// ! Random gifts
const gifts = [
  'Gift 1',
  'Gift 2',
  'Gift 3'
];

function App() {
	const [gift, setGift] = useState();

  	const handleGetGift = () => {
    const random = Math.floor(Math.random() * gifts.length);
    	setGift(gifts[random])
  	};

  	return (
    	<div className="App" style={{padding: 30}}>
      		<h1>{gift || 'Chưa có phần thưởng'}</h1>
      		<button onClick={handleGetGift}>Nhận thưởng</button>
    	</div>
  	)
}
