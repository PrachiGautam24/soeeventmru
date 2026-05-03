import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return null
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })
  return user
}

export async function requireUser() {
  const user = await getCurrentUser()
  if (!user) {
    const err = new Error('UNAUTHORIZED')
    ;(err as Error & { status?: number }).status = 401
    throw err
  }
  return user
}

export async function requireAdminUser() {
  const user = await requireUser()
  if (user.role !== 'ADMIN') {
    const err = new Error('FORBIDDEN')
    ;(err as Error & { status?: number }).status = 403
    throw err
  }
  return user
}
