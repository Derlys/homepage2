import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SubscribeteComponent } from './subscribete.component'

@NgModule({
  declarations: [SubscribeteComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: SubscribeteComponent }])],
})
export class SubscribeteModule {}
