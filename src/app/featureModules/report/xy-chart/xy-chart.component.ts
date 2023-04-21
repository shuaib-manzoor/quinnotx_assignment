import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { DataServiceService } from 'src/app/services/data-service.service';
interface chartDataFormat{
  designation:number
}
@Component({
  selector: 'app-xy-chart',
  templateUrl: './xy-chart.component.html',
  styleUrls: ['./xy-chart.component.css']
})
export class XyChartComponent implements OnInit {
chart:any;
  constructor( private dataService:DataServiceService){

  }

  async ngOnInit(): Promise<void> {
    let engineers:any = await this.dataService.getEngineers();
    let map = new Map();
    for(let i=0; i<engineers.length; i++){

      if(map.has(engineers[i].designation)){
        map.set(engineers[i].designation, map.get(engineers[i].designation)+1);
      }
      else{
        map.set(engineers[i].designation, 1);
      }
    }
    let categories = [];
    let values = []
    for(let [key, value] of map){
      if(key != ""){
        categories.push(key)
        values.push(value)
      }
    }
    console.log(map)
    let options = {
      chart: {
        type: 'bar'
      },
      series: [
        {
          name: 'sales',
          data: values
        }
      ],
      xaxis: {
        categories: categories
      }
    }
    
    this.chart = new ApexCharts(document.querySelector('#chart'), options)
    this.chart.render()    
  }
  
}
