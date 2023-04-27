import FiltersView from './view/filters-view';
import SortView from './view/sort-view';
import AddNewPointView from './view/add-new-point-view';
import WaypointView from './view/waypoint-view';
import EditPointView from './view/edit-point-view';
import {render} from './render';

const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');


render(new FiltersView(), filtersContainer);
render(new SortView(), contentContainer);
render(new AddNewPointView(), contentContainer);
render(new WaypointView(), contentContainer);
render(new EditPointView(), contentContainer);
