export interface Element {
    Nome: string,
    Participacoes: number,
    Titulos: number,
    Vice: number
}
export interface Collection {
    content: Element[][],
    label: string,
    name: string
}
export interface DataCollections {
    players: Collection,
    teams: Collection,
    chars: Collection
}