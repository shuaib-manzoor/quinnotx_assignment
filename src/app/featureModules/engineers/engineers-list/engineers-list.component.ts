import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';
import Swal from 'sweetalert2';
let observables: Array<Subscription> = []

@Component({
  selector: 'app-engineers-list',
  templateUrl: './engineers-list.component.html',
  styleUrls: ['./engineers-list.component.css']
})
export class EngineersListComponent implements OnInit {
  engineers: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  refreshing = false;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getEngineersData()
  }

  getEngineersData() {
    let s1 = this.dataService.getEngineers().subscribe((resp: any) => {
      this.engineers = resp
    })
    observables.push(s1);
  }

  deleteEngineer(id: string) {
    Swal.fire({
      text: "Are you sure, you want to delete this engineer. This cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Delete",
      backdrop: true,
      allowOutsideClick: false
    }).then((resp) => {

      if (resp.value) {
        Swal.fire({
          text: "Engineer is being deleted. Please wait...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        })
        setTimeout(() => {
          Swal.close();
          this.engineers = this.engineers.filter(x => x.id != id);
          this.refreshing = true;
          setTimeout(() => {
            this.refreshing = false;
          }, 1000);
        }, 1000);
      }
      else {
        Swal.close();
      }
    })
  }

  ngOnDestroy() {
    observables.forEach((x) => {
      if (x instanceof Subscription) {
        x.unsubscribe()
      }
    })
  }
}
