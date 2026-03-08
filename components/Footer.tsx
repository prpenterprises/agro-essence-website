export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-xl font-semibold mb-3">AgroEssence</h4>
        <p className="text-sm">
          © {new Date().getFullYear()} AgroEssence. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
