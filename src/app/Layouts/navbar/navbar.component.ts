import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => this.searchEvent.emit(value));
  }

  onSearch(value: string) {

    if(value && value.length > 3) {
      this.router.navigate(['/search-movie'],{queryParams: {query: value}});
    }
  }

  search= new FormControl('');
  @Output('search') searchEvent = new EventEmitter<string>();
}
