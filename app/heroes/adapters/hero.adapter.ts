import { HeroOriginalResponse } from "../interfaces/heroes-original-response.interface";
import { HeroSummary } from "../interfaces/hero-adapter.interface";
import { getHeroSlug } from "../utils/hero-slug.util";
import { getPrimaryAttribute } from "../utils/attributes.util";

export class HeroAdapter implements HeroSummary {
  id: number;
  name: string;
  image: string;
  primaryAttribute: string;
  complexity: number;

  constructor(hero: HeroOriginalResponse) {
    this.id = hero.id;
    this.name = hero.name_loc;
    this.image = this.cdnHeroImage(hero.name_loc);
    this.primaryAttribute = getPrimaryAttribute(hero.primary_attr);
    this.complexity = hero.complexity;
  }

  private readonly cdnHeroImage = (heroName: string) => {
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${getHeroSlug(heroName)}.png`
  }

}

