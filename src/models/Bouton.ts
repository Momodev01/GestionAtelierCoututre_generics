export class Bouton {
    constructor(private readonly _id: number, private _libelle:string, private _type:BoutonTypes) {}


    get id(): number {
        return this._id;
    }

    get libelle(): string {
        return this._libelle;
    }

    set libelle(value: string) {
        this._libelle = value;
    }

    get type(): BoutonTypes {
        return this._type;
    }

    set type(value: BoutonTypes) {
        this._type = value;
    }
}