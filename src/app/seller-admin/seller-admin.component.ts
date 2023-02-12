import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-admin',
  templateUrl: './seller-admin.component.html',
  styleUrls: ['./seller-admin.component.css']
})
// export class SellerAdminComponent {
  export class SellerAdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signIn(data:object):void {
    console.log(data)
    console.log("Function is called")
  }

}
