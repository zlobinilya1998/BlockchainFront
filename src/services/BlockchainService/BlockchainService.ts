import {DefaultResult} from "@/helpers";
import {ApiHelper} from "@/services/Infrastructure/ApiHelper";

export default class BlockchainService {
    static baseUrl = ApiHelper.apiUrl + '/bc'
    static async getSymbols(){
       const res = await fetch(this.baseUrl + '/symbols');
       return DefaultResult(res);
    }
    static async getSymbolInfo(symbol: string){
        const res = await fetch(this.baseUrl + `/symbols/${symbol}`);
        return DefaultResult(res);
    }
}
