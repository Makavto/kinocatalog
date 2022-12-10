import * as FilmsActionCreators from './films';
import * as MovieActionCreators from './movie';
import * as SeriesActionCreators from './series';
import * as MainActionCreators from './main';

export default {
  ...FilmsActionCreators,
  ...MovieActionCreators,
  ...SeriesActionCreators,
  ...MainActionCreators,
}