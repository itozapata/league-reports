import crossfilter from 'crossfilter';

class GamesByLaneCrossfilterContext {
  constructor(data) {
    this.data = data;
    this.crossfilter = crossfilter(data);
    this.groupAll = this.crossfilter.groupAll();
    this.winDimension = this.crossfilter.dimension(d => {
      return d.pmint_win
    });
    this.winGroup = this.winDimension.group().reduceCount()

    this.pmintCountDimension = this.crossfilter.dimension(d => d.pmint_count)
    this.pmintCountGroup = this.pmintCountDimension.group().reduceCount()

    this.makeDimensionAndGroup('top')
    this.makeDimensionAndGroup('jungle')
    this.makeDimensionAndGroup('mid')
    this.makeDimensionAndGroup('adc')
    this.makeDimensionAndGroup('support')
  }

  makeDimensionAndGroup(lane) {
    const dimensionField = `${lane}Dimension`
    const groupField = `${lane}Group`
    const summonerDimensionField = `${lane}SummonerDimension`
    const summonerGroupField = `${lane}SummonerGroup`

    this[dimensionField] = this.crossfilter.dimension(d => d[`pmint_${lane}`])
    this[groupField] = this[dimensionField].group()

    this[summonerDimensionField] = this.crossfilter.dimension(d => d[`pmint_${lane}_summonerName`])
    this[summonerGroupField] = this[summonerDimensionField].group()
  }
}

export default GamesByLaneCrossfilterContext