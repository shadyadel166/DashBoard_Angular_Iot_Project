import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/Api.service';
import { IBlog } from '../../Model/IBlog';

@Component({
  selector: 'app-SearchBar',
  templateUrl: './SearchBar.component.html',
  styleUrls: ['./SearchBar.component.css']
})
export class SearchBarComponent implements OnInit {
searchResults:IBlog[]=[]
  constructor(private apiServ:ApiServiceService ) { }

  ngOnInit() {
  }
searchByTitle(title: string){
this.apiServ.getBlogBytitle(title).subscribe({
  next: (res) => {
    console.log(res);
  },
  error: err => {
    console.log(err);
  }
})
}
}
