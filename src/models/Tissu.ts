export class Tissu {
    constructor(private readonly _id: number, private _qte:number, private _couleur:CouleurTypes) {}


    get id(): number {
        return this._id;
    }

    get qte(): number {
        return this._qte;
    }

    set qte(value: number) {
        this._qte = value;
    }

    get couleur(): CouleurTypes {
        return this._couleur;
    }

    set couleur(value: CouleurTypes) {
        this._couleur = value;
    }
}