import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import mockStationList from './components/RadioWidget/mockStationList'
import MockProvider from "./utils/mocks/MockProvider";
// const createTestProps = (props) => ({
//   stationList: mockStationList,
//   ...props
// })
describe("App component test suite", () => {
  it('it should render successfully', () => {
    // let props = createTestProps({})
    const comp = render(
      <MockProvider>
        <App />
      </MockProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});