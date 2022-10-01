import { httpProvider } from './http'

type subCondition = {
  mood?: string
  year?: number
  month?: number
  date?: number
}

export class DiaryProvider {
  static async getDiariesByWhat(
    what: string,
    subCondition: subCondition
  ): Promise<IDiary[] | IDiary> {
    return httpProvider.post(`/test/showDiaries/${what}`, subCondition)
  }

  static async saveDiary(content: { content: string }): Promise<IDiary> {
    return httpProvider.post('/test/saveDiary', content)
  }
}
