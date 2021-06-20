import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetch().subscribe( (res: any) => {
      this.clients = res.data;
    })
  }


}
