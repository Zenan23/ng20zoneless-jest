import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';

describe('Card Component', () => {
  let fixture: ComponentFixture<Card>;
  let component: Card;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render "card works!" in a <p> tag', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('card works!');
  });
});
