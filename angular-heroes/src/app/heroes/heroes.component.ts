import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {
    
  } 

  getHeroes() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes=heroes);
  }
  add(name:string):void{
    name =name.trim();
    if(!name){return;}
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => this.heroes.push(hero));
  }
  deleteHero(id:number):void{
    this.heroService.deleteHero(id).subscribe();
    this.heroes=this.heroes.filter(h=> h.id!=id);
  }
  ngOnInit() {
    this.getHeroes();
  }

}
