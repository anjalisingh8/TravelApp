
import { CompileStylesheetMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_b } from '@angular/platform-browser';
import { PackageDetails } from '../PackageDetails';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {

  status:boolean = false;
  isSelected:boolean = false;
  // packageArr:PackageDetails[] = [];
  // selectedStockArr:SelectedStock[] = [];

  selectedPackage:any = [];
  printPackageInformation:any = [];
  printingPackage:any = [];

  packageArr = [
    {id:1,Image:'assets/kerala.jpeg',packageName:'Kerala Tour', noOfDays : 3, cost:85000,discount:"20 % Discount"},
    {id:2,Image:'assets/maharashtra.jpeg',packageName:'Maharashtra Tour', noOfDays : 3, cost:90000,discount:"30% Discount"},
    {id:3,Image:'assets/andhra.jpeg',packageName:'Andhra Tour', noOfDays : 2, cost:34000,discount:"50% Discount"},
    {id:4,Image:'assets/west-bengal.jpeg',packageName:'West Bengal Tour', noOfDays : 4, cost:5600,discount:"40% Discount"},
    {id:5,Image:'assets/jharkhand.jpeg',packageName:'Jharkhand Tour', noOfDays : 4, cost:40000,discount:"60% Discount"},
  ];

  sort(){
      this.packageArr.sort(function(a:any,b:any){
        return a.cost - b.cost;
      });
  }

  sortDays(){
    this.packageArr.sort(function(a:any,b:any){
      return a.noOfDays - b.noOfDays;
    });
}

sortDiscount(){
  this.packageArr.sort(function(a:any,b:any){
    return a.discount - b.discount;
  });
}

  ngOnInit(): void {
  }


  // selectedPackage:string[] = new Array;
  
  onChange(){
    console.log(this.packageArr);
  }

  getPackage(e:any,id:number){
    if(e.target.checked){
      this.selectedPackage.push(id);
    }
    else{
      this.selectedPackage = this.selectedPackage.filter((m: number) => m!= id);
    }
  }

  printPackage(){
    if(this.selectedPackage.length <= 1){
      alert("More than one Package should be selected to do comparision");
    }
    else{
      for(let i = 0; i < this.selectedPackage; i++){
        let p = this.packageArr[i].id;
        let newProduct = this.packageArr[i];

        if(this.selectedPackage.indexOf(p)!= -1){
          this.printPackageInformation.push(newProduct);
        }

        
      }
      this.printingPackage = this.printPackageInformation;
        this.printPackageInformation = [];
        console.log(this.printingPackage);
    }
  }
}
