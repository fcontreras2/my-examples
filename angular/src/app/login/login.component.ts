import { Component, OnInit, OnChanges } from "@angular/core";
import {
  trigger,
  transition,
  style,
  animate,
  state
} from "@angular/animations";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [
    trigger("fadeIn", [
      state(
        "load",
        style({
          opacity: 1
        })
      ),
      transition("* => load", [animate("1s ease-in")])
    ])
  ]
})
export class LoginComponent implements OnInit, OnChanges {
  load = null;
  isLoading = false;

  public form = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(private router: Router,private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: any) {}

  onSubmit() {
    this.isLoading = true;
    this.authService.login().subscribe(data => {
      // Navigate to the login page with extras
      this.router.navigate([data]);
    });
  }

  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
}
