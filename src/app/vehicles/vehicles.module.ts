import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleCreateComponent } from './vehicle-create/vehicle-create.component';
import { VehicleUpdateComponent } from './vehicle-update/vehicle-update.component';



@NgModule({
  declarations: [VehicleListComponent, VehicleCreateComponent, VehicleUpdateComponent],
  imports: [
    CommonModule
  ]
})
export class VehiclesModule { }
