import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormComponent } from '../../../shared/components/form/form.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass, FormComponent, InputsComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      message:['', [Validators.minLength(10), Validators.required]],
      email:['', [Validators.email, Validators.required]],
      name:['', [Validators.required]],
      age:['', [Validators.required]],
      gender:['', [Validators.required]]
    })
  }

  sendInfo(){
    console.log(this.contactForm.value);
  }

  hasErrors(camp: string, error: string): string | false {    
    const err = this.contactForm.get(camp)?.hasError(error) && this.contactForm.get(camp)?.touched || false;

    if(err){    
      return error;
    }
    return false;
  }  
  
}
