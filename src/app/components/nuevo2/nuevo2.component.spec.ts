import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuevo2Component } from './nuevo2.component';

describe('Nuevo2Component', () => {
  let component: Nuevo2Component;
  let fixture: ComponentFixture<Nuevo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nuevo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nuevo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
