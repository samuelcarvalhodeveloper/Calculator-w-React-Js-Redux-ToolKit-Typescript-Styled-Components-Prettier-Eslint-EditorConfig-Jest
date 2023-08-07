import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Header from "../../../../components/index/header/Header";
import { HEADER_SITE_LOGO_ALT_TEXT } from "../../../constants/pages/index/pageElementsAltTextConstants";

describe('Test "Header" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText(HEADER_SITE_LOGO_ALT_TEXT)).toBeTruthy();
  });
});
