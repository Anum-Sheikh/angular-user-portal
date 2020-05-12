import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { SharedDataService } from "../services/data.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  /** Holds User Details */
  userObject: any = {firstName : null, lastName: null, userName: null, password: null}
  
  /** Holds User List */
  userList: any = [];

  constructor(
    private toastr: ToastrService,
    private dataService: SharedDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userList = this.dataService.getUserList();
  }
  onSubmit(){}

  public submitForm(submitForm){

   debugger;
      if(!submitForm.form.valid){
        this.toastr.error("Enter required fields");
      }else{
  
        if(this.checkUserAlreadyExist()){
          this.toastr.error("User already exist");
        }else{
          console.log("User Obj :", this.userObject);
          this.dataService.addData(this.userObject);
          this.toastr.success("you are registered successfully");
        }
  
      }

  }

  public checkUserAlreadyExist(){
    if(this.userList.find(x => x.userName == this.userObject.userName.trim())) return true;
    else return false;
  }

  public navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
