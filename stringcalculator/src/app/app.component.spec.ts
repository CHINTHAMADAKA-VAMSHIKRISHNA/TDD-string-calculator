import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let component;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'stringcalculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stringcalculator');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, stringcalculator'
    );
  });

  //simplest test case of an empty string

  it('should return 0 with empty string', () => {
    expect(component.add('')).toBe(0);
  });

  it('should return sum for the n comma seperated number string', ()=> {
    expect(component.add('4,4,5,6,9')).toEqual(28);
  })

  it('should handle new lines between numbers (instead of commas)', () => {
    expect(component.add('1\n2,3')).toEqual(6);
  })

});
