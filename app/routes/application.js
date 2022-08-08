import Route from '@ember/routing/route';

class Gif {
  constructor(gifData) {
    this.height = gifData.images.original.height;
    this.width = gifData.images.original.width;
    this.url = gifData.images.original.url;
  }
}

export default class ApplicationRoute extends Route {
  url =
    'https://api.giphy.com/v1/gifs/search?q=surf&api_key=UvqUEXYvVoWkapCOdIQyU60XETPOAorS&limit=20';

  async model() {
    const gifs = await fetch(this.url, {}).then((response) => response.json());

    return gifs.data.map((gifData) => new Gif(gifData));
  }
}
