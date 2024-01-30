import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { CardProjectDTO } from '../../data/interfaces/CardProjectDTO'
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco'
import { LanguagesAccepted } from '../../data/interfaces/LanguagesAccepted'

//TODO: adaptar traduccion cundo este listo el back con respuesta traducida

@Component({
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    this.setTransalation(`project-card.pjtTitle-${this.identifier}`, this.cardData.pjtType)
    this.setTransalation(`project-card.title-${this.identifier}`, this.cardData.title)
    this.setTransalation(
      `project-card.description-${this.identifier}`,
      this.cardData.content.description
    )
  }
  @Input() reverse: boolean = false
  @Input() identifier: number = 0
  @Input() cardData: CardProjectDTO = {} as CardProjectDTO
  linksInfo: { key: 'repo' | 'deploy'; class: string }[] = [
    {
      key: 'repo',
      class: 'fa-brands fa-github',
    },
    {
      key: 'deploy',
      class: 'fa-solid fa-rocket',
    },
  ]

  classReverse() {return {'reverse': this.reverse}}
  setTransalation(transKey: string, value: LanguagesAccepted) {
    Object.entries(value).forEach(([key, value]) => {
      this.translocoService.setTranslationKey(transKey, value, key)
    })
  }
}
