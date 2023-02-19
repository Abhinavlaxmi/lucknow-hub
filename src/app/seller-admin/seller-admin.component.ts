import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn, SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-admin',
  templateUrl: './seller-admin.component.html',
  styleUrls: ['./seller-admin.component.css']
})
// export class SellerAdminComponent {
  export class SellerAdminComponent implements OnInit {
  constructor(private seller:SellerService, private router:Router) {}
  showLogin=false
  authError: string ='';

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data:SignUp):void {
    console.log(data)
    this.seller.sellerSignUp(data)
  }

  signIn(data:SignIn):void {
    this.authError="";
    // console.log(data)
    this.seller.sellerSignIn(data)
    this.seller.isSignInError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is incorrect";
      }

    })
  }

  openLogin() {
    this.showLogin = true
  }

  openSignUp() {
    this.showLogin=false
  }

}
