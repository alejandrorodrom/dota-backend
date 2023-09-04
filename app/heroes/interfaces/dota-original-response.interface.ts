interface DotaOriginalResponse {
  result: {
    data: {
      heroes: DotaOriginalHero[]
    }
  }
}

interface DotaOriginalHero {
  id: number,
  name: string,
  name_loc: string,
  name_english_loc: string,
  primary_attr: number,
  complexity: number
}
