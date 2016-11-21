import { FETCH_WEATHER} from '../actions/weather-action';

export default function (state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
    return state.concat([action.payload.data])

  }
  return state;
}
