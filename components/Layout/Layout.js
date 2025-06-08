export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-700 text-white p-4 shadow">
        <h1 className="text-xl font-semibold">💧 Water Leak Reporter</h1>
      </header>

      <main className="max-w-4xl mx-auto p-6">{children}</main>

      <footer className="text-center text-sm text-gray-500 mt-10 pb-4">
        &copy; {new Date().getFullYear()} Johannesburg Smart Water Project
      </footer>
    </div>
  );
}
