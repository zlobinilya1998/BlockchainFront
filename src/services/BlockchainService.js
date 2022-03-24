import {DefaultResult} from "@/helpers";

export default class BlockchainService {
    static apiPath = 'http://localhost:5000/api';
    static baseUrl = '/bc';
    static async getSymbols(){
       const res = await fetch(this.apiPath + this.baseUrl + '/symbols');
       return DefaultResult(res);
    }
}
