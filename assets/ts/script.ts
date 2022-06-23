const CONT = document.querySelector('.container');

class Clothes {
    private _id: number;
    private _codprod: number;
    private _collezione: string;
    private _capo: string;
    private _modello: number;
    private _quantita: number;
    private _colore: string;
    private _prezzoivaesclusa: number;
    private _prezzoivainclusa: number;
    private _disponibile: string;
    private _saldo: number;
    /* private _prezzoFinale: number; */

    constructor(id: number, codprod: number, collezione: string, capo: string, 
                modello: number, quantita: number, colore: string, prezzoivaesclusa: number, 
                prezzoivainclusa: number, disponibile: string, saldo: number/* , prezzoFinale: number */) {
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


    public get id(): number { return this._id; }
    public get codprod(): number { return this._codprod; }
    public get collezione(): string { return this._collezione; }
    public get capo(): string { return this._capo; }
    public get modello(): number { return this._modello; }
    public get quantita(): number { return this._quantita; }
    public get colore(): string { return this._colore; }
    public get prezzoivaesclusa(): number { return this._prezzoivaesclusa; }
    public get prezzoivainclusa(): number { return this._prezzoivainclusa; }
    public get disponibile(): string { return this._disponibile; }
    public get saldo(): number { return this._saldo; }

/*     getAcquistoCapo() {
        this.prezzoFinale = this.prezzoivainclusa - this.saldo;
    } */

}

fetch('Abbigliamento.json')  // fetch dell'url
.then(res => res.json())    // json parse
.then(function(data) {      // data contiene i dati fetchati dal json
    data.forEach((ele: any) => { // ele riporta tutti gli array presenti nel json. Per ogni array presente, crea div e lo popola con i dettagli (primo array, poi secondo)

        /* --------- Contenitore Img/Info ---------- */

        let cardCont = document.createElement('div');
        cardCont.className = 'cardCont';
        CONT?.append(cardCont);
        
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

        cardCont.append(pId, pCodProd, pCollezione, pCapo, pModello, pQuantita, pColore, 
                        pPrezzoIvaEsclusa, pPrezzoIvaInclusa, pDisponibile, pSaldo);
    
        let clothes = new Clothes (ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele);
        console.log(clothes);
    });
})