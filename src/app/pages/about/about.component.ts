import { Component, OnInit } from '@angular/core';
import { DirectorService } from "src/app/services/director.service"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  text = `We had a Break up! SAD!
  
  After the break up of Reckless Contingency, our Corp did not want remain in the Dronelands.  That is perfectly fine, but our motley crew were those who did not or could not follow in the new adventures.  While stories could be said one way or the other, the consensus is that there was no planning for people who wanted to to stay behind and it created a clash.  While I was unable to make the journey, I decided to help facilitate the replanting of pilots into new Homes around the Malpais region.
  
  The group, is not really a corp, but moreso a discord server of current and former members living in the area to keep in touch and do random things together.
  
  We do however seem to have some pilots who are enjoying BLOPs against our previous corp, though it is effort to recoup isk from loans outstanding to the Corp's CEO.
  
  We arent actively accepting members, as we are really just a group of people from various Corporations from RECON, a little SIG, who used to enjoy flying together, AND we have had no ill will towards BLOPs operations against each other.  After all, it is a part of the game and we have a sense of humor about it.  We all in the channel accept that it will happen to any of us.
  `
  content = []
  directors = []
  constructor(private _directorService: DirectorService) { 
    this.content = this.text.split("\n")
  }

  ngOnInit(): void {
    this._directorService.getAll().subscribe( dirs => this.directors = dirs);
  }

}
