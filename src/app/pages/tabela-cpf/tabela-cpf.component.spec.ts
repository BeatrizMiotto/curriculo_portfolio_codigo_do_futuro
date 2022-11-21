import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCPFComponent } from './tabela-cpf.component';

describe('TabelaCPFComponent', () => {
  let component: TabelaCPFComponent;
  let fixture: ComponentFixture<TabelaCPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCPFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
