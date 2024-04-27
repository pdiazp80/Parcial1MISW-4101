/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { CafeService } from './cafe.service';
import { HttpClientModule } from '@angular/common/http';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [CafeListComponent],
      providers:[CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const cafe = new Cafe(

        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        
        faker.lorem.sentence()
        
      );
      component.cafes.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four tr elements: one head and three bodies', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
    expect(debug.queryAll(By.css('tr.head'))).toHaveSize(1)
    expect(debug.queryAll(By.css('tr.body'))).toHaveSize(3)
  });

  it('should have td tag with the cafe.nombre, cafe.tipo, cafe.region', () => {
    debug.queryAll(By.css('td.nombre')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.cafes[i].nombre)
    });
    debug.queryAll(By.css('td.tipo')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.cafes[i].tipo)
    });
    debug.queryAll(By.css('td.region')).forEach((td, i)=>{
      expect(td.nativeElement.textContent).toContain(component.cafes[i].region)
    });
  });
});
