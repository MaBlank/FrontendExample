import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../apiservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  jokeData: ChuckNorrisJoke | undefined;

  constructor(private chuckNorrisService: ApiServiceService) { }

  ngOnInit(): void {
    this.chuckNorrisService.getRandomJoke().subscribe(data => {
      this.jokeData = data;
    });
  }

  get joke(): string | undefined {
    return this.jokeData?.value;
  }

  get date(): string | undefined {
    return this.jokeData?.created_at;
  }
}
