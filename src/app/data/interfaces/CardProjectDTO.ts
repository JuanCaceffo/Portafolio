//TODO: change this when the API accept languaje requests

import { LanguagesAccepted } from "./LanguagesAccepted"

export interface CardProjectDTO{
  pjtType: LanguagesAccepted
  title: LanguagesAccepted
  content: {
    description: LanguagesAccepted
    repo?: string
    deploy?: string
  }
  img: string
}