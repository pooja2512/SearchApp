import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { of } from 'rxjs';
import { SearchService } from 'src/app/service/search.service';
import { Person } from 'src/app/Model/People';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: jasmine.SpyObj<SearchService>;

  beforeEach(() => {
    // Create a spy object for the SearchService
    searchService = jasmine.createSpyObj('SearchService', ['searchPeople']);

    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [{ provide: SearchService, useValue: searchService }],
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear searchResults and call searchService on search()', () => {
    // Arrange
    component.searchTerm = 'John';
    const searchResults : Person[]= [{ id: 1, firstName: 'John', lastName: 'Doe', email:'john.Doe@abc.com',gender:'Male' }];
    searchService.searchPeople.and.returnValue(of(searchResults));

    // Act
    component.search();

    // Assert
    expect(component.searchResults).toEqual(searchResults);
    expect(searchService.searchPeople).toHaveBeenCalledWith('John');
  });

  it('should clear showErrorAlert on closeAlert()', () => {
    // Arrange
    component.showErrorAlert = true;

    // Act
    component.closeAlert();

    // Assert
    expect(component.showErrorAlert).toBe(false);
  });
});
