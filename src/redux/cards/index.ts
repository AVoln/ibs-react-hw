import reducer from 'Project/redux/cards/reducer';
import { getCards } from 'Project/redux/cards/selectors';
import { storeCards } from 'Project/redux/cards/reducer';
import { fetchCards } from 'Project/redux/cards/thunks';

export default reducer;
export { storeCards, getCards, fetchCards };
