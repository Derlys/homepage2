import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { MiHistoriaComponent } from './mi-historia.component'

@NgModule({
  declarations: [MiHistoriaComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: MiHistoriaComponent }])],
})
export class MiHistoriaModule {}
