import "./index.css";
import { WebHeader } from "./component/WebHeader";
import { WebMenu } from "./component/WebMmenu";
import { WebFooter } from "./component/WebFooter";
function App() {
  return (
    <div className="container">
      <WebHeader />
      <WebMenu />
      <WebFooter />
    </div>
  );
}

export default App;
