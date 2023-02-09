import { useBearStore } from "../../stores";

const Home = () => {
  const bears = useBearStore(state => state.bears);
  const increaseBears = useBearStore(state => state.increase);
  const removeAllBears = useBearStore(state => state.removeAllBears);
  console.log("ejecuto en render home")

  return (
  <div className="main-content">
    <span>Home with {bears}</span>
    <button onClick={() => increaseBears(2)}>Increment Bears</button>
    <button onClick={removeAllBears}>Clean the house</button>
    </div>
    );
};

export default Home;
