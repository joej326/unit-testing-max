import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { ServerService } from '../server.service';

describe('Component: User', () => {
  beforeEach( ()=> {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
  });

  it('should create the app!', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('user name should be the user name from the service!', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService); // this goes to the component's injectors and gets the UserService we injected.
    fixture.detectChanges(); //we need this or we get a failure. This is required b/c initially, the service wasn't injected, then it was, so there was a change.
                             // NOTE: detectChanges runs ONCE. So we need to put it AFTER we make a change.
    expect(userService.user.name).toEqual(app.user.name);
  });


  it('should display the user name when user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;    // we can alter the values in the component for testing purposes.
    fixture.detectChanges(); 
    let compiled = fixture.debugElement.nativeElement; //this gives us access to the compiled template.
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });


  it('should\'t display the user name when user is NOT logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges(); 
    let compiled = fixture.debugElement.nativeElement; //this gives us access to the compiled template.
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('should do something', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let serverService = fixture.debugElement.injector.get(ServerService);
    let spy = spyOn(serverService, 'getWeather')
      .and.returnValue(Promise.resolve('data'));
  });
  
});
