import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      name: '',
      lastname: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit( event: SubmitEvent ) {
    event.preventDefault();

    this.submitted = true;

  }

}
