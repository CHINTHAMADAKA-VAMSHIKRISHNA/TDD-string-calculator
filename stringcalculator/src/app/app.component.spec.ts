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

  /* Support different delimiters
to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
the first line is optional. all existing scenarios should still be supported */


it('should handle different delimeters  and begining with "//[delimiter]\n[numbers]"', () => {
  expect(component.add('//;\n1;2')).toEqual(3);
})

it('Calling Add with a negative number will throw an exception “negatives not allowed” ', () => {
  expect(component.add('2,3,-5,7')).toBe('negatives not allowed: -5')
  expect(component.add('2,3,-5,7,-9')).toBe('negatives not allowed: -5,-9')
})

});
