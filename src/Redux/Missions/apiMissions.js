const URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const result = await fetch(URL);
  const data = await result.json();
  return data;
};

export default fetchMissions;
