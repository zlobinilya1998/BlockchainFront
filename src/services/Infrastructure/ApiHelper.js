export class ApiHelper {
    static localUrl = 'http://localhost:5000';
    static prodUrl = 'https://blockchain-front-seven.vercel.app';
    static api = '/api';

    static get baseUrl(){
        if (process.env.NODE_ENV == 'development') return this.localUrl;
        return this.prodUrl;
    }

    static get apiUrl() {
        return this.baseUrl + '/api'
    }
}
