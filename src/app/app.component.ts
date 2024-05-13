import { Component,OnInit } from '@angular/core';
import {MainService} from './services/main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'subjectlur';
  resData:any=[];
  changeLangSubscriber:any;
  constructor(private mainService:MainService){
  }

  ngOnInit(): void {
     this.mainService.getData().subscribe(res=>{
      this.resData=res;
     })
    
     this.changeLangSubscriber = this.mainService.dataObject.subscribe(l => {
        console.log(l);
     })
  }

  changeLang(data:any){
    this.mainService.changeLang(data)
  }
}
