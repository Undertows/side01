import { http } from './http'
export class DiaryProvider {
  //
  static async getDiariesByWhat(
    what: string,
    subCondition: subCondition
  ): Promise<IDiary[]> {
    return http.post(`/test/showDiaries/${what}`, subCondition)
  }

  static async saveDiary(content: {
    content: string
  }): Promise<PromiseGenerics> {
    return http.post('/test/saveDiary', content)
  }

  static async setMood(config: {
    mood: string
    id: unknown
  }): Promise<PromiseGenerics> {
    return http.post('/test/setMood', config)
  }

  static async deleteDiary(id: string): Promise<PromiseGenerics> {
    return http.delete(`/test/deleteDiary?id=${id}`)
  }

  static async handleHashTag(tags: {
    diary: string
    id: string
  }): Promise<PromiseGenerics> {
    console.log(`1231${tags}`)
    return http.put(`/test/handleTag`, tags)
  }

  static async showTags(): Promise<string[]> {
    return http.get(`/test/showTags`)
  }
}
