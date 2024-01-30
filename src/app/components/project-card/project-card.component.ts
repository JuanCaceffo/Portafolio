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
    this.setTransalation(`project-card.pjtTitle-${this.Identifier}`, this.cardData.pjtType)
    this.setTransalation(`project-card.title-${this.Identifier}`, this.cardData.title)
    this.setTransalation(
      `project-card.description-${this.Identifier}`,
      this.cardData.content.description
    )
  }
  @Input() Identifier: number = 0
  @Input() cardData: CardProjectDTO = {
    pjtType: { es: 'odio euismod', en: 'pjt-title' },
    title: { es: 'amet facilisis', en: 'title' },
    content: {
      description: {
        es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium lectus quam. Turpis nunc eget lorem dolor sed. Et odiopellentesque diam volutpat commodo sed egestas egestas fringilla.',
        en: 'description',
      },
      repo:'sdad'
    },
    img: '/assets/mocks-imgs/pjt/wordlCapp.jpeg',
  }
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

  setTransalation(transKey: string, value: LanguagesAccepted) {
    Object.entries(value).forEach(([key, value]) => {
      this.translocoService.setTranslationKey(transKey, value, key)
    })
  }
}
