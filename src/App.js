// Import Firebase Realtime Database functions
import { ref, getDatabase, onValue } from "firebase/database";
import { app } from "./config/firebase";
const db = getDatabase(app);

function App() {
  let gasValues = [];

  const gasRef = ref(db, "test");
  onValue(gasRef, (snapshot) => {
    const data = snapshot.val();

    const gas = { Methane: data.a, Ammonia: data.b, name: data.Time };
    gasValues.push(gas);
    // console.log(gas);
    if (gasValues.length > 10000) {
      gasValues.shift();
    }
    console.log(gasValues);
  });
  return (
    <div className="App">
      {/* <button onClick={() => getData()}>get data</button> */}
      <p>real-time data</p>
    </div>
  );
}

export default App;
