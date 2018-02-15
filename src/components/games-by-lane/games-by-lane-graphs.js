import React, { Component } from 'react'
import '../../App.css'
import './game-by-lane-graph.css'
import 'dc/dc.css'

import {Grid, Row, Col} from 'react-bootstrap'


// eslint-disable-next-line
import { ChartContainer, PieChart, RowChart, BubbleChart, DataTable, DataCount, BarChart, LineChart } from 'dc-react';
import * as d3 from 'd3';
// eslint-disable-next-line
import dc from 'dc';
import CrossfilterContext from './crossfilterContext'

class GamesByLaneGraphs extends Component {
  constructor(props) {
    super(props);
    this._crossfilterContext = null;
    this.cellSpacing = 2
  }

  crossfilterContext = (callback) => {
    if (!callback) {
      return this._crossfilterContext;
    }
    d3.csv('../league_games_by_lanes.csv', (data) => {
      this._crossfilterContext = new CrossfilterContext(data);
      callback(this._crossfilterContext);
    });
  };

  render() {
    return (
      <ChartContainer crossfilterContext={this.crossfilterContext}>
        <Grid className="games-by-lane-report-container">
          <Row><span className="text-center"><h1>Games By Lane</h1></span></Row>
          <Row className="text-center">
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <div><h3>Wins</h3></div>
              <PieChart
                dimension={ctx => ctx.winDimension}
                group={ctx => ctx.winGroup}
                width={180} height={180}
                radius={80} innerRadius={30}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <div className="text-center"><h3>Pmint Count</h3></div>
              <PieChart
                dimension={ctx => ctx.pmintCountDimension}
                group={ctx => ctx.pmintCountGroup}
                width={180} height={180}
                radius={80} innerRadius={30}
              />
            </Col>
          </Row>
          <Row className="text-center">
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>Top</h3>
              <RowChart
                dimension={ctx => ctx.topDimension}
                group={ctx => ctx.topGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>Jungle</h3>
              <RowChart
                dimension={ctx => ctx.jungleDimension}
                group={ctx => ctx.jungleGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>Mid</h3>
              <RowChart
                dimension={ctx => ctx.midDimension}
                group={ctx => ctx.midGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>ADC</h3>
              <RowChart
                dimension={ctx => ctx.adcDimension}
                group={ctx => ctx.adcGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>Support</h3>
              <RowChart
                dimension={ctx => ctx.supportDimension}
                group={ctx => ctx.supportGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
          </Row>

          <Row className="text-center">
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>Top</h3>
              <RowChart
                dimension={ctx => ctx.topSummonerDimension}
                group={ctx => ctx.topSummonerGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>Jungle</h3>
              <RowChart
                dimension={ctx => ctx.jungleSummonerDimension}
                group={ctx => ctx.jungleSummonerGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>Mid</h3>
              <RowChart
                dimension={ctx => ctx.midSummonerDimension}
                group={ctx => ctx.midSummonerGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>ADC</h3>
              <RowChart
                dimension={ctx => ctx.adcSummonerDimension}
                group={ctx => ctx.adcSummonerGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
            <Col sm={this.cellSpacing} md={this.cellSpacing}>
              <h3>Support</h3>
              <RowChart
                dimension={ctx => ctx.supportSummonerDimension}
                group={ctx => ctx.supportSummonerGroup}
                width={180} height={180}
                elasticX={true}
                margins={{top: 20, left: 10, right: 10, bottom: 20}}
                label={d => d.key}
                title={d => d.key}
                xAxis={axis => axis.ticks(4)}
                cap={7}
                othersGrouper={false}
              />
            </Col>
          </Row>
        </Grid>

        <DataCount
          dimension={ctx => ctx.crossfilter}
          group={ctx => ctx.groupAll}
        />
        <DataTable
          className="table table-hover"
          dimension={ctx => ctx.winDimension}
          group={d => `${d.pmint_win}`}
          columns={[
            'gameid',
            'pmint_side',
            'pmint_win',
            'pmint_count',
            'pmint_summoners',
            'pmint_top',
            'pmint_jungle',
            'pmint_mid',
            'pmint_adc',
            'pmint_support',
            'opponent_top',
            'opponent_jungle',
            'oppponent_mid',
            'opponent_adc',
            'opponent_support',
            'pmint_top_summonerName',
            'pmint_jungle_summonerName',
            'pmint_mid_summonerName',
            'pmint_adc_summonerName',
            'pmint_support_summonerName',
            'opponent_top_summonerName',
            'opponent_jungle_summonerName',
            'oppponent_mid',
            'opponent_adc',
            'opponent_support'
          ]}
        />
        <div className="clearfix" />
      </ChartContainer>
    );
  }
}


export default GamesByLaneGraphs