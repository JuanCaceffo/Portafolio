export interface CardProjectDTO{
  type: string
  title: string
  description: string
  repo?: string
  deploy?: string
  imgs: Array<string>
}