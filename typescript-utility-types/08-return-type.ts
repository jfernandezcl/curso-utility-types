// --- 08: ReturnType<T> ---
// Obtiene el tipo de retorno de una función

const createAuthResponse = (success: boolean) => {
  if (success) {
    const token = crypto.randomUUID()
    return { status: 200, token } as const
  }

  return { status: 401, error: "Unauthorized" } as const
}

const response = createAuthResponse(true)

type AuthResponse = ReturnType<typeof createAuthResponse>

const authResponse: AuthResponse = {
  status: 401,
  error: "Unauthorized"
}

//Extraemos el tipo que esa función nos devuelve y no es necesario crearlo de nuevo
// Si no cumple lo que le indicamos nos dará un error