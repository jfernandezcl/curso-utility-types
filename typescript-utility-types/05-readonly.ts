// --- 05: Readonly<T> ---
// Hace que todas las propiedades de un tipo sean de solo lectura.

interface Pizza {
  name: string;
  toppings: Readonly<string[]>;
}

const pizza: Readonly<Pizza> = {
  name: 'Margherita',
  toppings: ['Tomato', 'Mozzarella', 'Basil']
}

// no se pueden modificar las propiedades
pizza.name = 'Pepperoni'; // Esto ocurre porque al usar Readonly<Pizza>, todas las propiedades de Pizza (incluyendo name) se vuelven inmutables.
pizza.toppings.push('Pepperoni'); // convierte el array en solo lectura, lo que significa que no puedes modificarlo con métodos como push, pop, splice, etc.
