import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from './components';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';


const SHARED_MODULES: any = [
  FormsModule,
  CommonModule,
  RouterModule,
  RouterModule,
  MaterialModule,
  HttpClientModule,
  ReactiveFormsModule,
]

const SHARED_COMPONENTS: any = [SvgIconComponent]

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
})
export class SharedModule { }
