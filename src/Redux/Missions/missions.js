import fetchMissions from './apiMissions';

const GET_MISSION = 'SpaceTravelers/Missions/GET_MISSION';
const JOIN_MISSION = 'SpaceTravelers/Missions/JOIN_MISSION';

export default function missionsReducer(state = [], action) {
  switch (action.type) {
    case GET_MISSION:
      return action.payload;
    case JOIN_MISSION:
      return [
        ...state.map((mission) => {
          if (mission.id === action.payload.misssionId) {
            return { ...mission, reserved: action.payload.status };
          }
          return mission;
        }),
      ];
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

export const joinMission = (missionId, status) => ({
  type: JOIN_MISSION,
  payload: {
    mission: missionId,
    status: Boolean(status),
  },
});
