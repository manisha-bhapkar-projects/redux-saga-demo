import React from "react";
import { render } from "@testing-library/react";
import RadioWidget from './index';
import mockStationList from './mockStationList'
// import MockProvider from "../../utils/mocks/MockProvider";
const createTestProps = (props) => ({
    stationList: mockStationList,
    ...props
})
describe("Radio Widget component test suite", () => {
    it('it should render successfully', () => {
        let props = createTestProps({
            cardTitle: 'Custom Card Title',
            handlePlusButton: jest.fn(),
            handleMinusButton: jest.fn(),
            handleBackButton: jest.fn(),
            handleSwitchButton: jest.fn()
        })
        const comp = render(
            <RadioWidget {...props} />
        );
        expect(comp.container).toBeTruthy();
    });
});