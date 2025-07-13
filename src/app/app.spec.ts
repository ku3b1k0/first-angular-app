import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { environment } from '../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let consoleSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    consoleSpy = spyOn(console, 'log');
  });

  describe('Component Creation', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should have correct component properties', () => {
      expect(component).toBeInstanceOf(App);
    });

    it('should initialize properly and call ngOnInit', () => {
      // This ensures ngOnInit is called during component lifecycle
      fixture.detectChanges();

      expect(consoleSpy).toHaveBeenCalled();
    });
  });

  describe('Component Properties', () => {
    it('should have correct title', () => {
      expect(component['title']).toBe('Hello world!');
    });

    it('should have correct environment name', () => {
      expect(component['environmentName']).toBe(environment.name);
    });

    it('should have correct environment code', () => {
      expect(component['environmentCode']).toBe(environment.code);
    });
  });

  describe('ngOnInit', () => {
    it('should call ngOnInit and log environment information', () => {
      component.ngOnInit();

      expect(consoleSpy).toHaveBeenCalledWith(
        'App initialized with environment:',
        environment.name,
        'Code:',
        environment.code,
      );
    });

    it('should call ngOnInit during component initialization and cover console.log', () => {
      // Reset the spy to ensure clean state
      consoleSpy.calls.reset();

      // This will trigger ngOnInit and cover the console.log line
      fixture.detectChanges();

      expect(consoleSpy).toHaveBeenCalledWith(
        'App initialized with environment:',
        environment.name,
        'Code:',
        environment.code,
      );
    });

    it('should log correct environment values with proper call count', () => {
      // Reset spy and call ngOnInit to ensure console.log line is covered
      consoleSpy.calls.reset();
      component.ngOnInit();

      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith(
        'App initialized with environment:',
        environment.name,
        'Code:',
        environment.code,
      );
    });
  });
});
