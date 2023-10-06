import { Component, OnInit } from '@angular/core';

function demo(number1: number, number12: number) {
  return 0;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() {
    this.filteredList = this.stringList.filter(str => str.includes('2'));
    let number = demo(10, 210);
  }
  message: string = 'Hallo Welt!';
  stringList: string[] = ['String 1', 'String 2', 'String 3', 'String 4'];
  filteredList: string[] = [];
  number: number = 10;
  ngOnInit(): void {
  }
  demo(a: number, b: number): number {
    return a * b;
  }

}
