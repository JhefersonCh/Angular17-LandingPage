import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

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
  sendInfo(event: Event){
    event.preventDefault();
    console.log(this.contactForm.value);
  }
  hasErrors(camp: string, error: string) {
    return this.contactForm.get(camp)?.hasError(error) && this.contactForm.get(camp)?.touched;
  }  
}  
