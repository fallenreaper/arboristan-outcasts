import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permit',
  templateUrl: './permit.component.html',
  styleUrls: ['./permit.component.scss']
})
export class PermitComponent implements OnInit {

  constructor() { }

  options = [
    {ship: "T1 Subcap", value: "30M ISK"},
    {ship: "T2 Subcap", value: "150M ISK"},
    {ship: "Capital", value: "700M ISK"},
    {ship: "Rorqual", value: "1.4B ISK"}
  ]

  ngOnInit(): void {
  }

}
