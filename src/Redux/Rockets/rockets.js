import ApiClient from '../../service/Apiclient';

const FETCHED_ROCKETS = 'spaceTravelers/rockets/FETCHED_ROCKETS';

export function fetchedRockets(rockets) {
  const formattedRockets = rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    flickrImages: rocket.flickr_images,
    description: rocket.description,
  }));
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
