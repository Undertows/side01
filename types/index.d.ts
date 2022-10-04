interface IDiary {
  _id: string
  content: string
  date: Date
  mood: string
}
type subCondition = {
  mood?: string
  year?: number
  month?: number
  date?: number
}
interface PromiseGenerics {
  msg: string
  diaryObj?: IDiary
}
type fullYear = {
  year: number
  month: number
  date: number
}
