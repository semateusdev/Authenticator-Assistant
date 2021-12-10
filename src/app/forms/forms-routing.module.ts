import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperFormsComponent } from './components/stepper-forms/stepper-forms.component'

const routes: Routes = [
  {
    path: '',
    component: StepperFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
