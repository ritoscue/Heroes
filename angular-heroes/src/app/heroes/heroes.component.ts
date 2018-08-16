import { Component, OnInit } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private http: HttpClient) {
    this.getHeroes();
  }

  getHeroes() {
    this.http.get("http://localhost:3000/heros")
    .subscribe((data:  Array<Hero>) =>{
      this.heroes=data;
    });
  }

  ngOnInit() {
  }

}
