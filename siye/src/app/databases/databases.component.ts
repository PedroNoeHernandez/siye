import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {
  autenticate: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.autenticate = this.authService.authenticated
  }

}
