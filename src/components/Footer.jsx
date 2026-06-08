export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="font-semibold text-lg mb-3">
              ProductX
            </h3>

            <p className="text-gray-500 text-sm">
              Professional product showcase platform.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">
              Products
            </h4>

            <ul className="space-y-2 text-sm text-gray-500">
              <li>Electronics</li>
              <li>Industrial</li>
              <li>Healthcare</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">
              Company
            </h4>

            <ul className="space-y-2 text-sm text-gray-500">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">
              Support
            </h4>

            <ul className="space-y-2 text-sm text-gray-500">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}