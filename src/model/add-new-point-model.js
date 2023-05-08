import { getRandomWaypoint } from '../mock/waypoint';


export default class AddNewPointModel {

  getNewPoint() {
    return getRandomWaypoint();
  }
}
