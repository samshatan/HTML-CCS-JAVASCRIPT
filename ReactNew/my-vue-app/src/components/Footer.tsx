export default function Footer() {
  return (
    <footer className="w-full bg-white/80 shadow-inner py-4 text-center text-gray-500 mt-auto">
      <span>© {new Date().getFullYear()} TodoApp. All rights reserved.</span>
    </footer>
  );
}
