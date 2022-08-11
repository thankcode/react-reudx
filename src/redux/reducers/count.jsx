import { INCREMENT, DECREMENT } from '../constant';

const initState = 99;
export default function count(prevState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return prevState + data;
    case DECREMENT:
      return prevState - data;
    default:
      return prevState;
  }
}
