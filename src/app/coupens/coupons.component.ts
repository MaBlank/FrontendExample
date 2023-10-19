import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as d3 from 'd3';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-coupens',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  private svg: any;
  private width: number = 500;

  // Sample fictional data for the pie chart
  private data: any[] = [
    { name: "Category A", value: 10 },
    { name: "Category B", value: 20 },
    { name: "Category C", value: 30 },
    { name: "Category D", value: 40 }
  ];

  constructor(private el: ElementRef, private ngZone: NgZone) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => this.createChart());
  }

  ngOnDestroy() {
    if (this.svg) {
      this.svg.remove();
    }
  }

  private createChart(): void {
    const height = Math.min(this.width, 500);
    const radius = Math.min(this.width, height) / 2;

    const arc = d3.arc()
      .innerRadius(radius * 0.67)
      .outerRadius(radius - 1);

    const pie = d3.pie()
      .padAngle(1 / radius)
      .sort(null)
      .value((d: any) => d.value);

    const color = d3.scaleOrdinal()
      .domain(this.data.map((d: any) => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), this.data.length).reverse());

    this.svg = d3.select(this.el.nativeElement).append('svg')
      .attr('width', this.width)
      .attr('height', height)
      .attr('viewBox', [-this.width / 2, -height / 2, this.width, height])
      .attr('style', 'max-width: 100%; height: auto;');

    this.svg.append('g')
      .selectAll()
      .data(pie(this.data))
      .join('path')
      .attr('fill', (d: any) => color(d.data.name))
      .attr('d', arc)
      .append('title')
      .text((d: any) => `${d.data.name}: ${d.data.value.toLocaleString()}`);

    this.svg.append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 12)
      .attr('text-anchor', 'middle')
      .selectAll()
      .data(pie(this.data))
      .join('text')
      .attr('transform', (d: any) => `translate(${arc.centroid(d)})`)
      .call((text: any) => text.append('tspan')
        .attr('y', '-0.4em')
        .attr('font-weight', 'bold')
        .text((d: any) => d.data.name))
      .call((text: any) => text.filter((d: any) => (d.endAngle - d.startAngle) > 0.25).append('tspan')
        .attr('x', 0)
        .attr('y', '0.7em')
        .attr('fill-opacity', 0.7)
        .text((d: any) => d.data.value.toLocaleString('en-US')));
  }
}
