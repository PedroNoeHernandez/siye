import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})


export class HomeCardComponent implements OnInit {
  apps: Array<any>= [
    {nameApp:'Intranet',urlApp:'',imageApp:'../../assets/img/LogosHome/logoUnamCanada.png'},
    {nameApp:'OneDrive',urlApp:'',imageApp:'../../assets/img/LogosHome/OneDriveLogo.png'},
    {nameApp:'Dashboard',urlApp:'',imageApp:'../../assets/img/LogosHome/graph.png'},
    {nameApp:'Forms',urlApp:'',imageApp:'../../assets/img/LogosHome/forms.png'},
    {nameApp:'Sitio Web',urlApp:'',imageApp:'../../assets/img/LogosHome/logoUnamCanada.png'},
    {nameApp:'Calendario',urlApp:'',imageApp:'../../assets/img/LogosHome/logoUnamCanada.png'}
  ];
  constructor() { }

  ngOnInit() {
     
  }

}
