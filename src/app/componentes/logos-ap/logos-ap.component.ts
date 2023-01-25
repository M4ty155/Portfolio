import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logos-ap',
  templateUrl: './logos-ap.component.html',
  styleUrls: ['./logos-ap.component.css']
})
export class LogosAPComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
   this.router.navigate(['/login'])
  }
}
