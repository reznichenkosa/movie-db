export default class MovieService {
    
    static _apiKey = process.env.REACT_APP_API_KEY;
    static _url = `https://www.omdbapi.com/?apikey=${this._apiKey}&`;

    static async getAll(dataSearch, page = 1) {
        const response = await fetch(`${this._url}page=${page}&s=${dataSearch}`);
        return await response.json();
    }

    static async getById(id) {
        const response = await fetch(`${this._url}i=${id}`);
        return await response.json();
    }
}