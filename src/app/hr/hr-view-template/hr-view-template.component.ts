import { Component, OnInit } from '@angular/core';
import { FetchTemplatesService } from './fetch-templates.service';
@Component({
  selector: 'app-hr-view-template',
  templateUrl: './hr-view-template.component.html',
  styleUrls: ['./hr-view-template.component.css']
})
export class HRViewTemplateComponent implements OnInit {

  templates : any;
  constructor(private _fetchtemplates:FetchTemplatesService) { }

  ngOnInit(){
    this._fetchtemplates.gettemplates().subscribe(res=>{
      this.templates=res;
    })
  }

}
