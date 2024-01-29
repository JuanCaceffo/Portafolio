import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { CardProjectDTO } from '../../data/interfaces/CardProjectDTO'
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco'
import { LanguagesAccepted } from '../../data/interfaces/LanguagesAccepted'

//TODO: adaptar traduccion cundo este listo el back con respuesta traducida

@Component({
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  selector: 'app-porject-card',
  templateUrl: './porject-card.component.html',
  styleUrls: ['./porject-card.component.scss'],
})
export class PorjectCardComponent implements OnInit {
  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    this.setTransalation('project-card.pjtTitle',this.cardData.pjtType)  
    this.setTransalation('project-card.title', this.cardData.title)
    this.setTransalation('project-card.description', this.cardData.content.description)
  }
  @Input() cardData: CardProjectDTO = {
    pjtType: { es: 'odio euismod', en: 'pjt-title' },
    title: { es: 'amet facilisis', en: 'title' },
    content: {
      description: {
        es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium lectus quam. Turpis nunc eget lorem dolor sed. Et odiopellentesque diam volutpat commodo sed egestas egestas fringilla.',
        en: 'description',
      },
    },
    img: '/assets/mocks-imgs/pjt/wordlCapp.jpeg',
  }

  setTransalation(transKey:string,value:LanguagesAccepted) {
      Object.entries(value).forEach(([key,value]) => {
        this.translocoService.setTranslationKey(transKey,value,key)
      })
  }
}
