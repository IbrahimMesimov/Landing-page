import NavScrollExample from "./components/Bootstrap";
import GroupExample from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from "./components/Footer";
export default function App() {
  return (
    <div>
      <NavScrollExample />
      <div style={{ padding: "10px" }}>
        <GroupExample />
      </div>{" "}
      <div>
        <CollapsibleExample />
      </div>
    </div>
  );
}
