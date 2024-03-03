function pianistCatalog(list) {
    const numberPieces = Number(list.shift())
    list.pop()
    let catalog = {}

    const Add = (piece, composer, key) => {
        return catalog.hasOwnProperty(piece) ? `${piece} is already in the collection!` :
            (catalog[piece] = new Piece(piece, composer, key),
                `${piece} by ${composer} in ${key} added to the collection!`)
    }

    const Remove = (piece) => {
        return catalog[piece] ? (delete catalog[piece], `Successfully removed ${piece}!`)
            : `Invalid operation! ${piece} does not exist in the collection.`
    }

    const ChangeKey = (piece, key) => {
        return catalog.hasOwnProperty(piece) ? (catalog[piece].changeKey(key),
                `Changed the key of ${piece} to ${key}!`)
            : `Invalid operation! ${piece} does not exist in the collection.`
    }

    const commands = {
        Add, Remove, ChangeKey
    }


    class Piece {
        constructor(piece, composer, key) {
            this.piece = piece
            this.composer = composer
            this.key = key
        }

        changeKey(newKey) {
            this.key = newKey
        }

        printInfo() {
             return`${this.piece} -> Composer: ${this.composer}, Key: ${this.key}`
        }
    }

    list.forEach((x, index) => {
        const data = x.split('|')

        if (index < numberPieces) {

            catalog[data[0]] = new Piece(...data)
        } else {
            console.log(commands[data.shift()](...data))
        }
    })
    Object.values(catalog).forEach((piece) => console.log(piece.printInfo()))

}