import { OverlayProvider } from "@toss/use-overlay";
import Router from "./components/Router";
import Provider from "./components/common/Provider";

function App() {
  return (
    <OverlayProvider>
      <Provider>
        <Router />
      </Provider>
    </OverlayProvider>
  );
}

export default App;
