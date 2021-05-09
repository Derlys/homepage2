import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  templateUrl: `./mi-historia.component.html`,
})
export class MiHistoriaComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Mi historia' })
  }
}
