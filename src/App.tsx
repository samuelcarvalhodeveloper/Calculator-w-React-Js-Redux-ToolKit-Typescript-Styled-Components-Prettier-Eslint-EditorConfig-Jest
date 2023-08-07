import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Index from "./pages/index";
import store from "./frameworks/redux/stores/store";

function App(): JSX.Element {
  return (
    <Provider store={store.storeConfiguration}>
      <Routes>
        <Route
          path="*"
          element={<Index />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
