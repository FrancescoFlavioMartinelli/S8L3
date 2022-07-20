// class Ospedale {

//     posizione:[number, number]
//     private _numeroSale:number
//     private _reparti:number
//     readonly codiceSanitario:string

//     constructor(){
//         this.codiceSanitario = this.getCodiceSasnitario()
//         this.numeroSale = 10
//     }

//     getCodiceSasnitario():string {
//         return "qwe123";
//     }

//     //getter / setter
//     get numeroSale() {
//         return this._numeroSale + 1
//     }

//     get doppioSale() {
//         return this._numeroSale * 2
//     }
//     set doppioSale(n:number) {
//         this._numeroSale = n / 2
//     }
//     set numeroSale(n:number) {
//         this._numeroSale = n
//         this._reparti = Math.ceil(n / 3)
//     }
// }


// let o = new Ospedale();
// // o.numeroSale
// // o.codiceSanitario = "ciao"
// // console.log(o.codiceSanitario)




// o.numeroSale = 10
// // o.posizione = "POS"

// let x
// console.log(5)

// x = 5
// console.log(5)


// //
// class Account {

//     constructor(public saldo:number){}

//     bonifico(n:number){
//         this.saldo -= n
//     }
// }

// class MotherAccount extends Account {
//     constructor(saldo:number) {
//         super(saldo)
//     }

//     bonifico(n:number){
//         this.saldo -= n * 0.1
//         super.bonifico(n)
//     }
// }

// let ma = new MotherAccount(100)
// ma.bonifico(10)

//ABSTRACT
abstract class Lavoratore {
    constructor(public readonly name: string, public _paga: number) {}

    get info() {
        return "Il lavoratore è " + this.name
    }

    set paga(n: number) {
        this._paga = n * 2 - 4
    }
    get paga() {
        return this._paga
    }

    abstract get stipendio()
}

class Programmatore extends Lavoratore {
    constructor(name: string, paga: number, public linguaggi: string[]) {
        super(name, paga)
    }

    get stipendio() {
        return this.paga * this.linguaggi.length
    }
}
class Commerciale extends Lavoratore {
    constructor(name: string, paga: number, public nClienti: number) {
        super(name, paga)
    }

    get stipendio() {
        return this.paga * this.nClienti
    }
}

type lav = {
    name: string,
    paga: number,
    tipologia: "p" | "c",
    n: number | string[]
}

let lavoratori: Lavoratore[]

fetch("/lavoratori").then(res => res.json()).then((res: lav[]) => {
    res.forEach((e) => {
        let lavor
        if (e.tipologia == "p") {
            lavor = new Programmatore(e.name, e.paga, e.n as string[])
        } else {
            lavor = new Commerciale(e.name, e.paga, e.n as number)
        }
        let tdNome = document.createElement("td")
        tdNome.innerHTML = lavor.name
        let tdStipendio = document.createElement("td")
        tdStipendio.innerHTML = lavor.stipendio
        lavoratori.push(lavor)
    })
})

let l = new Commerciale("Flavio", 1, 5);
console.log(l.stipendio)

//GENERICS - variabile per le tipolige typescript (nelle funzioni)
// type T = string|number
// function identity(value:T):T{
//     return value.toString()
// }
function identity < T > (value: T): T {
    return value
    // return value.toString()
}
let x = identity < boolean > ("string")


async function fetchApi < ResultType > (url: string): Promise < ResultType > {
    let response = await fetch(url)
    return response.json()
}
async function fetchLavoratori(): Promise < Lavoratore[] > {
    let response = await fetch("/lavoratori")
    return response.json()
}

fetchApi < Lavoratore[] > ("/lavoratori").then((res) => {
    res.forEach((e) => {
        let l = new Programmatore(e.name,)
        e.stipendio
    });
})
fetchApi < Utente[] > ("/lavoratori").then((res) => {
    res.forEach((e) => {
        e.getDatoUtente
    });
})
fetchLavoratori().then((res) => {
    res.forEach((e) => {
        e.stipendio
    });
})

async function getLavoratori() {
    let lavoratori = await fetchApi("/lavoratori")
}

// async function getLavoratori() {
//     let response = await fetch("/lavoratori")
//     return response.json()
// }

// getLavoratori().then((res)=>{

// })
// getLavoratori().then((res)=>{

// })

//Interface - modelli di oggetti solitamente implementati nelle classi (che dovranno seguire questo modello)

interface persona {
    name: string;
    last_name: string;
    age: number;
    getInfo(): string;
}

interface lavoratore {
    paga: number
    getStipendio(): number
    codiceLavoratore: number
    lav: lav
}

let pageController = {
    next: () => {
        return 10
    },
    prev: () => {
        return 10
    }
}


interface user {
    id: number;
    username: string;
    password: string;
}

// let p:persona = {
//     name: "Flavio",
//     last_name: "Martinelli"
// }

// class Utente {
//     constructor(private id: number, public name: string, public last_name: string, public age: number, public username: string) {}
// }
// class Lavoratore1 {
//     constructor(private cod: number, public name: string, public last_name: string, public age: number, public paga: number) {}
// }

abstract class Persona {
    name: string;
    last_name: string;
    age: number;
    abstract getInfo(): string;
}

class Cliente extends Persona implements persona {
    constructor(iban: string) {
        super()
    }

    getInfo() {
        return "string"
    }
}

class Utente implements persona, lav {

    name: string;
    last_name: string;
    age: number;
    paga: number;
    tipologia: "p" | "c";
    n:number
    getInfo() {
        return this.name + " " + this.last_name
    }
}