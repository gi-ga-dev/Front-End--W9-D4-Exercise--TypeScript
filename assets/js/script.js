"use strict";
const CONT = document.querySelector('.container');
class Clothes {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this._id = id;
        this._codprod = codprod;
        this._collezione = collezione;
        this._capo = capo;
        this._modello = modello;
        this._quantita = quantita;
        this._colore = colore;
        this._prezzoivaesclusa = prezzoivaesclusa;
        this._prezzoivainclusa = prezzoivainclusa;
        this._disponibile = disponibile;
        this._saldo = saldo;
    }
    get id() { return this._id; }
    get codprod() { return this._codprod; }
    get collezione() { return this._collezione; }
    get capo() { return this._capo; }
    get modello() { return this._modello; }
    get quantita() { return this._quantita; }
    get colore() { return this._colore; }
    get prezzoivaesclusa() { return this._prezzoivaesclusa; }
    get prezzoivainclusa() { return this._prezzoivainclusa; }
    get disponibile() { return this._disponibile; }
    get saldo() { return this._saldo; }
    discPercentage() {
        return (this.prezzoivainclusa * this.saldo) / 100;
    }
}
fetch('Abbigliamento.json')
    .then(res => res.json())
    .then(function (data) {
    data.forEach((ele) => {
        let cardCont = document.createElement('div');
        cardCont.className = 'cardCont';
        CONT === null || CONT === void 0 ? void 0 : CONT.append(cardCont);
        let pId = document.createElement('p');
        pId.className = 'pId';
        pId.innerHTML = `Id: ${ele.id}`;
        let pCodProd = document.createElement('p');
        pCodProd.className = 'pCodProd';
        pCodProd.innerHTML = `Codice Prodotto: ${ele.codprod}`;
        let pCollezione = document.createElement('p');
        pCollezione.className = 'pCollezione';
        pCollezione.innerHTML = `Collezione: ${ele.collezione}`;
        let pCapo = document.createElement('p');
        pCapo.className = 'pCapo';
        pCapo.innerHTML = `Capo: ${ele.capo}`;
        let pModello = document.createElement('p');
        pModello.className = 'pModello';
        pModello.innerHTML = `Modello: ${ele.modello}`;
        let pQuantita = document.createElement('p');
        pQuantita.className = 'pQuantita';
        pQuantita.innerHTML = `Quantita: ${ele.quantita}`;
        let pColore = document.createElement('p');
        pColore.className = 'pColore';
        pColore.innerHTML = `Colore: ${ele.colore}`;
        let pPrezzoIvaEsclusa = document.createElement('p');
        pPrezzoIvaEsclusa.className = 'pPrezzoIvaEsclusa';
        pPrezzoIvaEsclusa.innerHTML = `Prezzo Iva Esclusa: ${ele.prezzoivaesclusa}`;
        let pPrezzoIvaInclusa = document.createElement('p');
        pPrezzoIvaInclusa.className = 'pPrezzoIvaInclusa';
        pPrezzoIvaInclusa.innerHTML = `Prezzo Iva Inclusa: ${ele.prezzoivainclusa}`;
        let pDisponibile = document.createElement('p');
        pDisponibile.className = 'pDisponibile';
        pDisponibile.innerHTML = `Disponibile in: ${ele.disponibile}`;
        let pSaldo = document.createElement('p');
        pSaldo.className = 'pSaldo';
        pSaldo.innerHTML = `Saldo: ${ele.saldo}%`;
        // inizializzo un oggetto e dentro gli passo i parametri fetchati dal json
        let clothes = new Clothes(ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele);
        console.log(clothes);
        // Accedo al metodo della classe
        let pPrezzoFinale = document.createElement('p');
        pPrezzoFinale.className = 'pPrezzoFinale';
        // per ogni elemento prendi prezzo e saldo, e sottraili
        pPrezzoFinale.innerHTML = `Prezzo finale: ${ele.prezzoivainclusa - ele.discPercentage()}`; // classe.metodo(prezzo-saldo)
        cardCont.append(pId, pCodProd, pCollezione, pCapo, pModello, pQuantita, pColore, pPrezzoIvaEsclusa, pPrezzoIvaInclusa, pDisponibile, pSaldo, pPrezzoFinale);
    });
});
