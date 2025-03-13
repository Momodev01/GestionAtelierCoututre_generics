export class File {
    constructor(private readonly _id: number, private _libelle: string) {}


    get id(): number {
        return this._id;
    }

    get libelle(): string {
        return this._libelle;
    }

    set libelle(value: string) {
        this._libelle = value;
    }
}