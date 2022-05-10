import ApiClient from '../../service/Apiclient';

const FETCHED_ROCKETS = 'spaceTravelers/rockets/FETCHED_ROCKETS';
const FETCHING_ROCKETS = 'spaceTravelers/rockets/FETCHING_ROCKETS';

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
export function fetching() {
  return {
    type: FETCHING_ROCKETS,
  };
}

export const fetchRockets = () => async (dispatch) => {
  dispatch(fetching());
  setTimeout(async () => {
    const response = await ApiClient.fetchRockets();
    dispatch(fetchedRockets(response));
  }, 2000);
};

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHING_ROCKETS:
      return 'fetching Rockets...';
    case FETCHED_ROCKETS:
      return [...action.rockets];
    default:
      return state;
  }
}
