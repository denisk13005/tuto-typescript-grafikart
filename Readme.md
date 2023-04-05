# on installe typescript en dev dependence

on configure le tsconfig.json 
https://www.youtube.com/watch?v=uOuulpBs8dQ

# Syntaxe de base 

const a: string = "hello world"

const n:number = 3

const b:boolean = true

const d:null = null

const arr: string[] = ['aze','vvfr' ..] tableaux de strings

const user : {firstname: string, lastname?: string} = { firstname : 'denis', lastname:'kirmann'} // firtname est raquis mais lastname est optionnel grace au ?

const user : {firstname: string, [key: string] : string} = { firstname : 'denis', lastname:'kirmann'} // le premier paramètre est obligatoire, puis on ne sait pas combien il y en aura en plus

const date : Date = new Date()

const cb: Function = (e : MouseEvent): void => {

} // on déclare la fonction en li renseignant le type Function(fourni par ts), puis on type l'event et on déclare le type de retour de la fonction , ici void ( qui ne retourne rien )

function printId (id: number | string){
 console.log(id.toString())
} // determine le type id comme number ou string grace au symbole union (|)*

# Alias & Generics

on crée l'Alias de  type User 

type User = { firstaname : string, lastname ?: string}
Puis on l'attribut a la const user

const user : User = { firstname : 'denis', lastname:'kirmann'}


function identity<ArgType>(arg: ArgType):ArgType {
  return arg
} // on a appeleé ArgType mais on peut le nommer comme on veut 
// maintenant on peut soit remplacer ArgType par un type ds la fonction quand on l'appelle :
const a = identity<number>(3)

// soit ne rien mettre et il déterminera le type de a seul

const a = identity(3)

On peut faire de même avec des tableaux

function first<Type>(arg: Type[]):Type{
  return arg[0]
}

const a = first(['a','b']) // ts déduit que a sera un string car le tableau contient que des strings

## toutes ces définitions de type servent aussi à l'autocomplétion en ne proposant pour des variables que les méthodes qui correspondent au type de la variable 





 







