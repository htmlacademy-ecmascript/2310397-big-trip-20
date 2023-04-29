import {render} from '../render.js';
import EventListView from '../view/event-list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import WaypointView from '../view/waypoint-view.js';


const POINT_COUNT = 3;

export default class BoardPresenter {
  waypontListContainer = new EventListView();


  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.waypontListContainer, this.boardContainer);
    render(new AddNewPointView(), this.waypontListContainer.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      render(new WaypointView(), this.waypontListContainer.getElement());
    }
  }
}
