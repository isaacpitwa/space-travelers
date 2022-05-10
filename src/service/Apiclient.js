export default class ApiClient {
  static ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';
  static fetchRockets = async () => {
    const response = await fetch(this.ROCKETS_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  };

}
