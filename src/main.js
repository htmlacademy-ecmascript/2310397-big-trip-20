import FiltersView from './view/filters-view';
import SortView from './view/sort-view';
import WaypointModel from './model/waypoint-model';
import AddNewPointModel from './model/add-new-point-model';
import BoardPresenter from './presenter/board-presenter.js';
import {render} from './render';

const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');
const waypointModel = new WaypointModel();
const addNewPointModel = new AddNewPointModel();
const boardPresenter = new BoardPresenter({
  boardContainer: contentContainer,
  waypointModel,
  addNewPointModel
});


render(new FiltersView(), filtersContainer);
render(new SortView(), contentContainer);

boardPresenter.init();
