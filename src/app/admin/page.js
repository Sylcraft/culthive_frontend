// admin/page.js
import Header from '@/components/Header'
import Footer from '@/components/Footer' 
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div>
      <Header />
      <h1>Tableau de bord administrateur</h1>
      <Link href="/admin/reviews">Voir les critiques</Link>
      <Link href="/admin/users">Gestion des utilisateurs</Link>
      <Footer />
    </div>
  )
}
