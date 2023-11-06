export default class Model {
    constructor() {
        this.buyLottoNumber = 0;
        this.lottoDataObject = new Array();
        this.winningNumber = new Array();
    }

    getBuyLottoNumber() {
        return this.buyLottoNumber;
    }

    getLottoDataObject() {
        return this.lottoDataObject;
    }

    getWinningNumber() {
        return this.winningNumber;
    }

    setBuyLottoNumber(number) {
        this.buyLottoNumber = number;
    }

    setLottoDataObject(lottoObject) {
        this.lottoDataObject.push(lottoObject);
    }

    setWinningNumber(winningNumber) {
        this.winningNumber = winningNumber;
    }
}