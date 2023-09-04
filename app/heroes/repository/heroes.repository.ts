import axios, { AxiosResponse } from 'axios';

export const getAllHeroes = async () => {
    return await axios({
      method: 'get',
      url: 'https://www.dota2.com/datafeed/herolist?language=spanish',
    })
      .then((response: AxiosResponse<DotaOriginalResponse>) => {
        return response.data.result.data.heroes
      })
      .catch(e => {
        console.log('getAllHeroes =>', e)
        return [];
      });
}

// const getHeroesById = () => {
//   const hero = Promise;
//   return hero;
// }
