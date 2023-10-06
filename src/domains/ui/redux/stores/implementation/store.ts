import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "../../../../calculator/redux/slices/implementation/CalculatorSlice";

class Store {
  public storeConfiguration = configureStore({
    reducer: {
      calculatorValue: CalculatorSlice,
    },
  });
}

const store: Store = new Store();

export type RootState = ReturnType<typeof store.storeConfiguration.getState>;
export type AppDispatch = typeof store.storeConfiguration.dispatch;

export default store;
export { Store };
