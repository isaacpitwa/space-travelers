import fetchMissions from './apiMissions';

const GET_MISSION = 'SpaceTravelers/Missions/GET_MISSION';

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case GET_MISSION:
      return action.payload;
    default:
      return state;
  }
}

export const getMission = () => async (dispatch) => {
  let missions;
  try {
    missions = await fetchMissions();
    dispatch({
      type: GET_MISSION,
      payload: missions,
    });
  } catch (err) {
    return err;
  }
  return missions;
};
