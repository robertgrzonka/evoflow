import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/auth/signin', // Jeśli użytkownik niezalogowany → przekierowanie,
  },
})

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'], // Ochrona dashboardu i API
}
