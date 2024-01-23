import { Component, Input } from '@angular/core';
import { CapitalizePipe } from '../../../pipes/capitalize.pipe';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CapitalizePipe],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent{
  @Input() name! :string;
  @Input() hasErrors!: string | false;

  ERROR_MESSAGES = {
    'required':'This camp is required.',
    'email':'Not valid email.',
    'minlength':'10 characters min.'
  }

  errorMessage(){
    const errorKey = this.hasErrors as keyof typeof this.ERROR_MESSAGES;
    return this.ERROR_MESSAGES[errorKey] || '';
  }
}
