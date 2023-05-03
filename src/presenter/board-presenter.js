import {render} from '../render.js';
import EventListView from '../view/event-list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import WaypointView from '../view/waypoint-view.js';


const POINT_COUNT = 3;

export default class BoardPresenter {
  waypointListContainer = new EventListView();


  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.waypointListContainer, this.boardContainer);
    render(new AddNewPointView(), this.waypointListContainer.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new WaypointView(), this.waypointListContainer.getElement());
    }
  }
}
