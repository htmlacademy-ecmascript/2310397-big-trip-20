import FiltersView from './view/filters-view';
import SortView from './view/sort-view';
import BoardPresenter from './presenter/board-presenter.js';
import {render} from './render';

const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: contentContainer});


render(new FiltersView(), filtersContainer);
render(new SortView(), contentContainer);

boardPresenter.init();
