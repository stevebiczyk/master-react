import Add from "./components/Add";
import Greetings from "./components/Greetings";

function App() {
  const myName = "Istvan Biczyk";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <>
      <h1>{myName}</h1>
      <p> 2 * 2 = {2 * 2}</p>
      <p> My Friends List: {["Alex, Andy, Keith"]}</p>
      <p> 2 * 2 = {multiply(2, 2)}</p>
      <p className={specialClass}>This is a simple class</p>
    </>
  );
}
export default App;
