import { LIST_STATION, GET_STATION } from "../actions/actionTypes";
import { RadioStationObject } from '../../components/RadioWidget';

export type RadioWidgetActionProps = {
  type: string;
  data: Array<RadioStationObject>;
}

const initialState = {
  loading: true,
  station_data: []
};

const stationReducer = (state = initialState, action: RadioWidgetActionProps) => {
  switch (action.type) {
    case GET_STATION: {
      return {
        ...state,
        loading: true,
      };
    }

    case LIST_STATION: {
      const { data } = action;
      return {
        ...state,
        station_data: data,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default stationReducer;