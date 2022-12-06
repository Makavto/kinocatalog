import * as FilmsActionCreators from '../action-creators/films';
import * as MovieActionCreators from '../action-creators/movie';
import * as SeriesActionCreators from '../action-creators/series';
import * as MainActionCreators from '../action-creators/main';

export default {
  ...FilmsActionCreators,
  ...MovieActionCreators,
  ...SeriesActionCreators,
  ...MainActionCreators,
}