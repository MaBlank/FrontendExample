// chucknorris.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {ApiServiceService} from "./apiservice.service";

describe('ChuckNorrisService', () => {
  let service: ApiServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiServiceService]
    });

    service = TestBed.inject(ApiServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();  // Ensure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRandomJoke', () => {
    it('should fetch a random joke', () => {
      const mockJoke = {
        categories: [],
        created_at: "2020-01-05 13:42:26.194739",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "ztj4bULpSU6gHx2Eoldxvw",
        updated_at: "2020-01-05 13:42:26.194739",
        url: "https://api.chucknorris.io/jokes/ztj4bULpSU6gHx2Eoldxvw",
        value: "Chuck Norris is the only person that can punch a cyclops between the eye."
      };

      service.getRandomJoke().subscribe((joke: { value: any; }) => {
        expect(joke.value).toEqual("Chuck Norris is the only person that can punch a cyclops between the eye.");
      });

      const req = httpMock.expectOne('https://api.chucknorris.io/jokes/random');
      expect(req.request.method).toBe('GET');
      req.flush(mockJoke);
    });
  });
});
