import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder,ReactiveFormsModule } from '@angular/forms'  
import { AddTemplatesService } from './add-templates.service';
@Component({
  selector: 'app-hr-create-template',
  templateUrl: './hr-create-template.component.html',
  styleUrls: ['./hr-create-template.component.css']
})
export class HRCreateTemplateComponent implements OnInit {

  templateForm: FormGroup;  
  
  constructor(private fb:FormBuilder,private _addtemplate:AddTemplatesService) {  
     
    this.templateForm = this.fb.group({  
      name: '',  
      attributes: this.fb.array([]) ,  
    });  
  }  

  ngOnInit(): void {
  }
  attributes() : FormArray {  
    return this.templateForm.get("attributes") as FormArray  
  }  
     
  newAttribute(): FormGroup {  
    return this.fb.group({  
      name: '' 
    })  
  }  
     
  addAttribute() {  
    this.attributes().push(this.newAttribute());  
  }  
     
  removeAttribute(i:number) {  
    this.attributes().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.templateForm.value);
    this._addtemplate.addTemplate(this.templateForm.value)
  }  

}
