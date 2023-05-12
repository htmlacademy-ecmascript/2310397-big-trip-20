import { getRandomWaypoint } from '../mock/waypoint';


const WAYPOINTS_COUNT = 3;

export default class WaypointModel {
  waypoints = Array.from({length: WAYPOINTS_COUNT}, getRandomWaypoint);

  getWaypoints() {
    return this.waypoints;
  }

  getNewPoint() {
    return getRandomWaypoint();
  }
}
