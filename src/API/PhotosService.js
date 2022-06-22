export default class PhotosService {
  constructor() {
    this.BASE_URL = "https://api.pexels.com/v1/";
    this.API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";
    this.PER_PAGE = "per_page=3";
    this.CURATED = "curated?";
  }
  async fetchImages() {
    const response = await fetch(this.BASE_URL + this.CURATED + this.PER_PAGE, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: this.API_KEY,
      },
    });
    const data = await response.json();
    return data.photos;
  }
}
