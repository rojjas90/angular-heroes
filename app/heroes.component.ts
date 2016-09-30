import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import { Hero } from './hero';
import { HeroService } from './hero.service'

/*export class Hero {
    id: number;
    name: string;
}*/

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
    // template: `
    // <!-- <h1>{{title}}</h1> -->
    //
    // <h2>My heroes</h2>
    // <ul class="heroes">
    //     <!-- <li> //each heroe goes here </li> -->
    //     <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
    //         <span class="badge">{{hero.id}}</span>{{hero.name}}
    //     </li>
    // </ul>
    // <!-- <my-hero-detail [hero]="selectedHero"></my-hero-detail> -->
    // <div *ngIf="selectedHero">
    //   <h2>{{selectedHero.name | uppercase}} is my hero</h2>
    //   <button (click)="gotoDetail()">View details</button>
    // </div>
    //
    // <!-- ----------------------------------- -->
    //
    // <!-- <div *ngIf="selectedHero">
    //     <h2>{{selectedHero.name}} details!</h2>
    //     <div><label>id: </label>{{selectedHero.id}}</div>
    //     <div>
    //         <label>name:</label>
    //         <!- - <input type="text" value="{{hero.name}}" placeholder="name"> - ->
    //         <input [(ngModel)]="selectedHero.name" placeholder="name">
    //     </div>
    // </div> -->
    // `,
    //     styles: [`
    //   .selected {
    //     background-color: #CFD8DC !important;
    //     color: white;
    //   }
    //   .heroes {
    //     margin: 0 0 2em 0;
    //     list-style-type: none;
    //     padding: 0;
    //     width: 15em;
    //   }
    //   .heroes li {
    //     cursor: pointer;
    //     position: relative;
    //     left: 0;
    //     background-color: #EEE;
    //     margin: .5em;
    //     padding: .3em 0;
    //     height: 1.6em;
    //     border-radius: 4px;
    //   }
    //   .heroes li.selected:hover {
    //     background-color: #BBD8DC !important;
    //     color: white;
    //   }
    //   .heroes li:hover {
    //     color: #607D8B;
    //     background-color: #DDD;
    //     left: .1em;
    //   }
    //   .heroes .text {
    //     position: relative;
    //     top: -3px;
    //   }
    //   .heroes .badge {
    //     display: inline-block;
    //     font-size: small;
    //     color: white;
    //     padding: 0.8em 0.7em 0 0.7em;
    //     background-color: #607D8B;
    //     line-height: 1em;
    //     position: relative;
    //     left: -1px;
    //     top: -4px;
    //     height: 1.8em;
    //     margin-right: .8em;
    //     border-radius: 4px 0 0 4px;
    //   }
    // `],
    // providers: [HeroService]
})
export class HeroesComponent implements OnInit {

    /*    title = 'Tour of Heroes';
        hero = 'Windstorm';*/
    /*hero: Hero = {
        id: 1,
        name: 'Windstorm
    }*/

    //title = 'Tour of Heroes';
    heroes = [];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroServices: HeroService
    ) { }

    getHeroes(): void {
        // this.heroes = this.heroServices.getHeroes();
        this.heroServices.getHeroes().then(heroes => this.heroes = heroes);
        // this.heroServices.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
