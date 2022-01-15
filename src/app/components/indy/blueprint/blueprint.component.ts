import { Component, Input, OnInit } from '@angular/core';
import { Blueprint } from 'src/app/classes/blueprint';
import { JaniceService } from 'src/app/services/janice.service';
import { EvepraisalService } from 'src/app/services/evepraisal.service';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.scss']
})
export class BlueprintComponent implements OnInit {
  @Input() 
  set blueprint(bp: Blueprint) {
    this._blueprint = bp;
  };
  get blueprint() { 
    return this._blueprint;
  }
  private _blueprint: Blueprint = null;
  computedItems = {}
  Object = Object

  prices: {} = {}; // id : price.
  constructor(private _evepraisalService: EvepraisalService) { }

  ngOnInit(): void {
  }

  adjustBlueprintME(materialLevel: number) {
    if (materialLevel < 0) materialLevel = 0;
    if (materialLevel > 10) materialLevel = 10;
    this.blueprint.materialEffeciencyLevel = materialLevel
    this.blueprint.computedMineralCost().forEach( item => {
      this.computedItems[item.id] = item;
    })
    console.log(this.computedItems)
  }

  buyOrBuild(bp: Blueprint) {
    this._evepraisalService.query(bp.requiredItems.map( i => i.name)).then( d =>{
      console.log("Build or Build Data ", d)
    })
    // this._janciceService.query( this.blueprint.requiredItems.map( i => i.name)).then( d => {
    //   console.log("In Blueprint: ", d)
    // })
  }
}
