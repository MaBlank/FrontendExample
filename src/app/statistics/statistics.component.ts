import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from "@angular/animations";
import * as d3 from 'd3';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  private data = [
    {x: 0, y: 5},
    {x: 1, y: 9},
    {x: 2, y: 7},
    {x: 3, y: 5},
    {x: 4, y: 3}
  ];
  addRandomData(): void {
    const newX = this.data.length; // Assuming x is sequential and starts from 0
    const newY = Math.floor(Math.random() * 11); // Random number between 0 and 10

    this.data.push({ x: newX, y: newY });

    // Clear the SVG for redrawing
    d3.select('svg').selectAll("*").remove();

    // Redraw the chart
    this.createChart();
  }

  private createChart(): void {
    const svg = d3.select('svg');
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    // Define the scales
    const x = d3.scaleLinear().domain([0, this.data.length - 1]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Define the line generator
    const line = d3.line<any>()
      .x((d: any) => x(d.x))
      .y((d: any) => y(d.y));

    // Add the line path
    g.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    // Add the X Axis
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Add the Y Axis
    g.append('g')
      .call(d3.axisLeft(y));
  }

  ngOnInit(): void {
    this.createChart();
  }

}
