import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfProjectsComponent } from './pf-projects.component';

describe('PfProjectsComponent', () => {
  let component: PfProjectsComponent;
  let fixture: ComponentFixture<PfProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
