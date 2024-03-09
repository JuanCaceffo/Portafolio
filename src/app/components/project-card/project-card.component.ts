import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { CardProjectDTO } from '../../data/interfaces/CardProjectDTO'
import { TranslocoDirective } from '@ngneat/transloco'

@Component({
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  ngOnInit() {}
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
}
