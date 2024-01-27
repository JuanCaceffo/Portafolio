//TODO: change this when the API accept languaje requests

interface CardProjectDTO{
  pjtType: LanguagesAccepted
  title: LanguagesAccepted
  content: {
    description: LanguagesAccepted
    repo?: string
    deploy?: string
  }
  img: string
}