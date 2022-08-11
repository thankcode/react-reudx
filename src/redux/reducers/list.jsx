import { ADDLIST } from '../constant';
const initState = [];
export default function list(prevState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDLIST:
      return [...prevState, data];
    default:
      return prevState;
  }
}
