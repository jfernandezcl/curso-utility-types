// --- 10: NonNullable<T> ---
// Crea un tipo excluyendo null y undefined de T.

type UserEmail = string | null | undefined
 
interface User {
  id: number
  email: UserEmail
}
 
const users: User[] = [
  { id: 1, email: 'user1@example.com' },
  { id: 2, email: null },
  { id: 3, email: undefined },
]

function sendNewsletter(email: NonNullable<UserEmail>) {
  console.log(`Enviando newsletter a: ${email}`)
}

users.forEach(user => {
  if (user.email) {
    sendNewsletter(user.email)
  }
})