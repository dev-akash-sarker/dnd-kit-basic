import "./App.css";

import SortablePreset from "./components/SortSimple";
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import Simple from "./components/simple";
// eslint-disable-next-line no-unused-vars
import SimpleVersionTwo from "./components/simple-v2";

function App() {
  return (
    <>
      {/* <Simple /> */}
      {/* <SimpleVersionTwo /> */}
      <div style={{ margin: "0 auto" }}>
        <SortablePreset />
      </div>

      {/* <MySortableList /> */}
    </>
  );
}

export default App;
