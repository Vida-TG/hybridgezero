import Home from "./pages/Home";
import { WagmiConfig } from "wagmi";
import { config } from './components/WagmiConfig'
import "./App.css";

function App() {
  return (
    <WagmiConfig config={config}>
      <Home />
    </WagmiConfig>
  );
}

export default App;
