import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store, {
  Store,
} from "../../../domains/ui/redux/stores/implementation/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  storeSetup?: Store;
}

function renderChildrenWithStoreProviders(
  ui: React.ReactElement,
  { storeSetup = store }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={storeSetup.storeConfiguration}>{children}</Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper }) };
}

export default renderChildrenWithStoreProviders;
