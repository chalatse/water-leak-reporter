// pages/index.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="title">Water Crisis Reporter</h1>
      <div className="grid">
        <Link href="/report" className="card">
          <h2>Report a Leak →</h2>
          <p>Submit new water leak reports with photos</p>
        </Link>
        <Link href="/dashboard" className="card">
          <h2>Municipal Dashboard →</h2>
          <p>View and manage all reported leaks</p>
        </Link>
      </div>
    </main>
  );
}