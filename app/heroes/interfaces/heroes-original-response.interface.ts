export interface HeroesOriginalResponse {
  result: {
    data: {
      heroes: HeroOriginalResponse[]
    }
  }
}

export interface HeroOriginalResponse {
  id: number,
  name: string,
  name_loc: string,
  name_english_loc: string,
  primary_attr: number,
  complexity: number
}
