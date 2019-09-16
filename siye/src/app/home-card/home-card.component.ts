import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})


export class HomeCardComponent implements OnInit {
  apps: Array<any>= [
    {nameApp:'Intranet',urlApp:'https://canada.unam.mx/intranet/',imageApp:'../../assets/img/LogosHome/logoUnamCanada.png'},
    {nameApp:'OneDrive',urlApp:'https://unamcanada-my.sharepoint.com/_layouts/15/MySite.aspx?MySiteRedirect=AllDocuments',imageApp:'../../assets/img/LogosHome/OneDriveLogo.png'},
    {nameApp:'Dashboard',urlApp:'',imageApp:'../../assets/img/LogosHome/graph.png'},
    {nameApp:'Forms',urlApp:'https://forms.office.com/',imageApp:'../../assets/img/LogosHome/forms.png'},
    {nameApp:'Sitio Web',urlApp:'https://canada.unam.mx/es/idiomas/',imageApp:'../../assets/img/LogosHome/logoUnamCanada.png'},
    {nameApp:'Calendario',urlApp:'https://canada.unam.mx/intranet/calendario/',imageApp:'../../assets/img/LogosHome/logoUnamCanada.png'},
    {nameApp:'Outlook',urlApp:'https://outlook.office365.com/mail/inbox',imageApp:'../../assets/img/LogosHome/Outlooklogo.png'},
    {nameApp:'Bases de datos',urlApp:'/databases',imageApp:'../../assets/img/LogosHome/graph.png'},
  ];
  constructor() { }

  ngOnInit() {
     
  }

}
