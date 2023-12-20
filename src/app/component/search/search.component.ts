import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';
  searchResults: any[] = [];
  showErrorAlert: boolean = false;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search() {
    if(this.searchResults){
      this.searchResults = [];
    }
    this.searchService.searchPeople(this.searchTerm).subscribe((data) => { 
      console.log(data);
      this.searchResults = data },
      (error) => {console.error(error);
        this.showErrorAlert = true});
      //alert('Please enter a string value')});
  }

  closeAlert()
  {
    this.showErrorAlert = false;
  }

}
