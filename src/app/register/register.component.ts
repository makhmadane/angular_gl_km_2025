import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenResponse } from '../models/token-response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });
  }


  register() {
    if (this.form.valid) {
      this.auth.register(this.form.value).subscribe({
        next: (res: TokenResponse) => {
          this.auth.saveToken(res.access_token);

          this.router.navigate(['/offre']);
        },
        error: err => alert("Identifiants incorrects")
      });
    }
  }
}
