import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  constructor() { }

  public musicas: any[] =[]

  ngOnInit(): void {
    this.musicas.push(
      {
        id: 1,
        album: 'The Queen is Dead',
        banda:'The Smiths',
        ano: 1986
      }
    )

    this.musicas.push(
      {
        id: 2,
        album: 'Hunky Dory',
        banda: 'David Bowie',
        ano: 1971
      }
    )
    this.musicas.push(
      {
        id: 3,
        album: 'Revolver',
        banda:'The Beatles',
        ano: 1966
      }
    )
    this.musicas.push(
      {
        id: 4,
        album: 'Doolittle',
        banda:'	Pixies',
        ano: 1989 
      }
    )
    this.musicas.push(
      {
        id: 5,
        album: 'Closer',
        banda:'	Joy Division',
        ano: 1980
      }
    )
    this.musicas.push(
      {
        id: 6,
        album: 'Never Mind The Bollocks',
        banda:'Sex Pistols',
        ano: 1977
      }
    )
    this.musicas.push(
      {
        id: 7,
        album: 'London Calling',
        banda:'The Clash',
        ano: 1979
      }
    )
    this.musicas.push(
      {
        id: 8,
        album: 'Hounds of Love',
        banda:'Kate Bush',
        ano: 1985
      }
    )
    this.musicas.push(
      {
        id: 9,
        album: 'Dusty in Memphis',
        banda:'Dusty Springfield',
        ano: 1969
      }
    )
    this.musicas.push(
      {
        id: 10,
        album: 'Dynasty',
        banda:'Kiss',
        ano: 1979
      }
    )

  }

}