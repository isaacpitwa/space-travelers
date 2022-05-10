import ApiClient from '../../service/Apiclient';

const FETCHING_ROCKETS = 'spaceTravelers/rockets/FETCHING_ROCKETS';
const FETCHED_ROCKETS = 'spaceTravelers/rockets/FETCHED_ROCKETS';
const RESERVE_ROCKET = 'spaceTravelers/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'spaceTravelers/rockets/CANCEL_RESERVATION';

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
  }, 1000);
};
export const reserveRocket = (rocket) => ({
  type: RESERVE_ROCKET,
  rocket,
});

export const cancelReservation = (rocket) => ({
  type: CANCEL_RESERVATION,
  rocket,
});

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHING_ROCKETS:
      return 'fetching Rockets...';
    case FETCHED_ROCKETS:
      return [...action.rockets];
    case RESERVE_ROCKET:
      return state.map(
        (rocket) => (rocket.id !== action.rocket.id ? rocket : { ...rocket, reserved: true }),
      );
    case CANCEL_RESERVATION:
      return state.map(
        (rocket) => (rocket.id !== action.rocket.id ? rocket : { ...rocket, reserved: false }),
      );
    default:
      return state;
  }
}
