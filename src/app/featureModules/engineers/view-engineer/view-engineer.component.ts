import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-view-engineer',
  templateUrl: './view-engineer.component.html',
  styleUrls: ['./view-engineer.component.css']
})
export class ViewEngineerComponent implements OnInit {
  engineer: any = {};
  loading = true;
  constructor(private dataService: DataServiceService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.getUserDeatils(id);
  }

  async getUserDeatils(id: string) {
    this.engineer = await this.dataService.getEngineerById(id);
    this.loading = false;
  }

  back() {
    this.location.back();
  }
}
