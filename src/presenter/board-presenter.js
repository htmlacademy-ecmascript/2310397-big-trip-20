import {render} from '../render.js';
import EventListView from '../view/event-list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import WaypointView from '../view/waypoint-view.js';


export default class BoardPresenter {
  waypointListContainer = new EventListView();


  constructor({boardContainer, waypointModel}) {
    this.boardContainer = boardContainer;
    this.waypointModel = waypointModel;
  }

  init() {
    this.boardWaypoints = [...this.waypointModel.getWaypoints()];
    this.boardNewPoint = this.waypointModel.getNewPoint();

    render(this.waypointListContainer, this.boardContainer);
    render(new AddNewPointView({newPoint: this.boardNewPoint}), this.waypointListContainer.getElement());

    for (let i = 0; i < this.boardWaypoints.length; i++) {
      render(new WaypointView({waypoint: this.boardWaypoints[i]}), this.waypointListContainer.getElement());
    }
  }
}
