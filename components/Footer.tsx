export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {currentYear} Priyanshu Chahar. All rights reserved.</p>
      </div>
    </footer>
  );
}
