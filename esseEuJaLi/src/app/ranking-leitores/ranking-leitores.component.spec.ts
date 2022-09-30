import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingLeitoresComponent } from './ranking-leitores.component';

describe('RankingLeitoresComponent', () => {
  let component: RankingLeitoresComponent;
  let fixture: ComponentFixture<RankingLeitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingLeitoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingLeitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
