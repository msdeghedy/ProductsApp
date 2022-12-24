import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConfirmExitService } from './../../services/confirm-exit.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private confirmExitService: ConfirmExitService
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.maxLength(8),
          Validators.pattern('^\\S*$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get formControls() {
    return this.registerForm.controls;
  }

  handleSubmitForm() {
    this.confirmExitService.setConfirmExitService(true);
  }

  ngDoCheck() {
    if (this.registerForm.dirty) {
      this.confirmExitService.setConfirmExitService(true);
    }
  }
}
