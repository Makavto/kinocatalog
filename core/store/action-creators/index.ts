import * as FilmsActionCreators from './films';
import * as MovieActionCreators from './movie';
import * as SeriesActionCreators from './series';
import * as MainActionCreators from './main';
import * as ScrollActionCreators from './scroll';
import * as SearchActionCreators from './search';

export default {
  ...FilmsActionCreators,
  ...MovieActionCreators,
  ...SeriesActionCreators,
  ...MainActionCreators,
  ...ScrollActionCreators,
  ...SearchActionCreators
}