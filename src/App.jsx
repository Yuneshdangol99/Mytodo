import Sidebar from "./component/Sidebar/Sidebar";
import HeroContainer from "./component/HeroContainer/HeroContainer";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <HeroContainer />
      </div>
    </>
  );
}

export default App;
