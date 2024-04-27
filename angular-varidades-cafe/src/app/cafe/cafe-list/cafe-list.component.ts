import { Component, OnInit } from '@angular/core';

import { Cafe } from '../cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  
  cafes: Array<Cafe> = [];

  constructor(private cafeService: CafeService) { }



  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafe) => {
      this.cafes = cafe;
    })
  }


  getTotalByTipo(tipo: string): number {
    return this.cafes.filter(cafe => cafe.tipo == tipo).length;
  }

  ngOnInit() {

    this.getCafes();
  }

}
