// --- 11: Awaited<T> ---
// Desenvuelve el tipo de una Promesa, obteniendo el tipo que resuelve.

async function getInfoFromGithub() {
  // Simulando un fetch
  return { name: 'Midudev', avatarUrl: 'https://github.com/midudev/avatar.png' }
}

// Obtenemos el tipo de la promesa y lo desenvolvemos
type GithubInfo = Awaited<ReturnType<typeof getInfoFromGithub>>

const userInfo: GithubInfo = {
  name: 'Midudev',
  avatarUrl: 'https://github.com/midudev/avatar.png'
}

// Extraemos el tipo que la promesa devuelve, sin necesidad de usar 'await'
