// --- 06: Exclude<T, U> ---
// Excluye de un tipo unión los elementos que indiques

// Ejemplo 01:
type Characters = "Iron Man" | "Thor" | "Loki" | "Hulk" | "Thanos"

type Avengers = Exclude<Characters, "Loki" | "Thanos">
type Villains = Exclude<Characters, Avengers>

const hero: Avengers = "Thor"
const villain: Villains = "Thanos"

// Ejemplo 02:
type Animal =
  | { kind: "dog"; bark: string }
  | { kind: "cat"; meow: string }
  | { kind: "fish"; swimSpeed: number }

type NoCatAllowed = Exclude<Animal, { kind: "cat" }>

const animal: NoCatAllowed = {
  kind: "dog", // No es un error porque solo estamos diciendo que no puede ser cat
  bark: 'woooofff'
}