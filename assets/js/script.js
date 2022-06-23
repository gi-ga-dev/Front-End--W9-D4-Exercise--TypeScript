"use strict";
const CONT = document.querySelector('.container');
class Clothes {
    /* private _prezzoFinale: number; */
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo /* , prezzoFinale: number */) {
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
        /* this._prezzoFinale = prezzoFinale; */
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
}
fetch('Abbigliamento.json') // fetch dell'url
    .then(res => res.json()) // json parse
    .then(function (data) {
    data.forEach((ele) => {
        /* --------- Contenitore Img/Info ---------- */
        let cardCont = document.createElement('div');
        cardCont.className = 'cardCont';
        CONT === null || CONT === void 0 ? void 0 : CONT.append(cardCont);
        /* ------------------------------------ */
        let pId = document.createElement('p');
        pId.className = 'pId';
        pId.innerHTML = `${'<b>Id:</b>'} ${ele.id}`;
        let pCodProd = document.createElement('p');
        pCodProd.className = 'pCodProd';
        pCodProd.innerHTML = `${'<b>Codice Prodotto:</b>'} ${ele.codprod}`;
        let pCollezione = document.createElement('p');
        pCollezione.className = 'pCollezione';
        pCollezione.innerHTML = `${'<b>Collezione:</b>'} ${ele.collezione}`;
        let pCapo = document.createElement('p');
        pCapo.className = 'pCapo';
        pCapo.innerHTML = `${'<b>Capo:</b>'} ${ele.capo}`;
        let pModello = document.createElement('p');
        pModello.className = 'pModello';
        pModello.innerHTML = `${'<b>Modello:</b>'} ${ele.modello}`;
        let pQuantita = document.createElement('p');
        pQuantita.className = 'pQuantita';
        pQuantita.innerHTML = `${'<b>Quantita:</b>'} ${ele.quantita}`;
        let pColore = document.createElement('p');
        pColore.className = 'pColore';
        pColore.innerHTML = `${'<b>Colore:</b>'} ${ele.colore}`;
        let pPrezzoIvaEsclusa = document.createElement('p');
        pPrezzoIvaEsclusa.className = 'pPrezzoIvaEsclusa';
        pPrezzoIvaEsclusa.innerHTML = `${'<b>Prezzo Iva Esclusa:</b>'} ${ele.prezzoivaesclusa}`;
        let pPrezzoIvaInclusa = document.createElement('p');
        pPrezzoIvaInclusa.className = 'pPrezzoIvaInclusa';
        pPrezzoIvaInclusa.innerHTML = `${'<b>Prezzo Iva Inclusa:</b>'} ${ele.prezzoivainclusa}`;
        let pDisponibile = document.createElement('p');
        pDisponibile.className = 'pDisponibile';
        pDisponibile.innerHTML = `${'<b>Disponibile in:</b>'} ${ele.disponibile}`;
        let pSaldo = document.createElement('p');
        pSaldo.className = 'pSaldo';
        pSaldo.innerHTML = `${'<b>Saldo:</b>'} ${ele.saldo}`;
        cardCont.append(pId, pCodProd, pCollezione, pCapo, pModello, pQuantita, pColore, pPrezzoIvaEsclusa, pPrezzoIvaInclusa, pDisponibile, pSaldo);
        let clothes = new Clothes(ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele);
        console.log(clothes);
    });
});
