import { Component, OnInit } from '@angular/core';
import { AbstractControl ,FormGroup, Validators,FormBuilder,FormControl,FormsModule }  from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup;
  errMessage = "";

  constructor(public router:Router,
    private _activatedRoute: ActivatedRoute,
    public _loginService:LoginService,
    private formBuilder: FormBuilder,
    ) {   

      this.loginForm = new FormGroup({
        username: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      });
     }
     
  
  ngOnInit(): void {
    
} 
  
  movetoregister(){

  }
login(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value);
        this._loginService.login(this.loginForm.value).subscribe(data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this.router.navigate(['/Home']);
          },
          error => { 
            this.errMessage=error.error.message;
            console.log(this.errMessage);
            
            
          }
        );
      }
      
      
    
}
}

