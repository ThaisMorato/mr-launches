import axios from 'axios';

export type ILaunchProperties = {
  id: number;
  date?: string;
  rocketId: number;
  rocket?: IRocketProperties;
  success?: boolean;
  launchCode?: string;
};

export type IRocketProperties = {
  id: number;
  name: string;
};

class LaunchesService {
  getLaunches = async (): Promise<ILaunchProperties[]> => {
    //TODO #TASK-FRONTEND-01 choose an http api to make a call to a endpoint http://localhost:3004/launches
    const launches = (await axios.get('http://localhost:3004/launches')).data;
    return launches;
  };
}

export default new LaunchesService();
