export enum PrimaryAttributes {
  strength = 0,
  agility = 1,
  intelligence = 2,
  universal = 3
}

const PRIMARY_ATTRIBUTES = {
  [PrimaryAttributes.strength]: 'strength',
  [PrimaryAttributes.agility]: 'agility',
  [PrimaryAttributes.intelligence]: 'intelligence',
  [PrimaryAttributes.universal]: 'universal'
}

export const getPrimaryAttribute = (idAttribute: PrimaryAttributes) => PRIMARY_ATTRIBUTES[idAttribute]
