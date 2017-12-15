import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';


@Component({
  selector: 'app-event-navbar',
  templateUrl: './event-navbar.component.html',
  styleUrls: ['./event-navbar.component.css']
})
export class EventNavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
