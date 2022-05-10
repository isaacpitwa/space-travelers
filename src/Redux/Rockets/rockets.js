const FETCHED_ROCKETS = 'spaceTravelers/rockets/FETCHED_ROCKETS';
import ApiClient from '../../service/Apiclient'

export function fetchedRockets(rockets) {
  const formattedRockets = rockets.map((rocket)=>{return {id: rocket.id,name:rocket.name, type: rocket.type,flickr_images:rocket.flickr_images }});
  return {
    type: FETCHED_ROCKETS,
    rockets: formattedRockets,
  };
}

export const fetchRockets = () => async (dispatch) => {
  const response = await ApiClient.fetchRockets();
  dispatch(fetchedRockets(response));
};


export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHED_ROCKETS:
      return [...action.rockets];
    default:
      return state;
  }
}
