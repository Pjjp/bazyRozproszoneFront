import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedDependenciesModule } from '../@shared-dependencies/shared-dependencies.module';



@NgModule({
  imports: [
    CommonModule,
    SharedDependenciesModule,
  ],
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent,
  ]
})
export class SharedModule { }
