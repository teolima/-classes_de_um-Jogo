class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo  = tipo
       
    }

    
    atacar(){
        
        let ataque
        if (this.tipo === "mago") {
            ataque = "magia"
        }else if (this.tipo === "guerreiro") {
            ataque = "espada"
        }else if (this.tipo === "monge") {
            ataque = "artes marciais"
        }else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }else{
            ataque = "digite um ataque valido"
        }

        console.log(`O ${this.nome} do tipo ${this.tipo} atacou usando ${ataque}`)
        
    }
}

let mago = new hero("Mario", 18, "mago")
let ninja = new hero("Chaves", 45, "ninja")
let monge = new hero("X-men", 20, "monge")
let guerreiro = new  hero("Pablo",45,"guerreiro") 

mago.atacar()
ninja.atacar()
monge.atacar()
guerreiro.atacar()