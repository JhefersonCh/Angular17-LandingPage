import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{
  @Input() contactForm!: FormGroup;
  @Input() sendInfo?: () => void;

  sendInf(event: Event){
    event.preventDefault();
    this.sendInfo?.();
  }
}
