export const getHeroSlug = (name: string) => {
  if (name === 'Io') return 'wisp';
  if (name === 'Centaur Warrunner') return 'centaur';
  return name.toLowerCase().split(' ').join('_').split('-').join('');
}
