export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">Everything you need to manage your daily tasks</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">Stay organized, boost productivity, and never miss a deadline with our simple and powerful Todo App.</p>
      <a href="/todos">
        <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition mb-12">Get Started</button>
      </a>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <div className="bg-white rounded-xl shadow-lg p-6 w-80 flex flex-col items-center">
          <span className="text-blue-500 text-3xl mb-2">📝</span>
          <h2 className="font-bold text-lg mb-2">Easy Task Management</h2>
          <p className="text-gray-600 text-center">Create, edit, and organize your todos with a beautiful and intuitive interface.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 w-80 flex flex-col items-center">
          <span className="text-purple-500 text-3xl mb-2">⏰</span>
          <h2 className="font-bold text-lg mb-2">Smart Reminders</h2>
          <p className="text-gray-600 text-center">Set due dates, priorities, and get reminded before your tasks are due.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 w-80 flex flex-col items-center">
          <span className="text-pink-500 text-3xl mb-2">📊</span>
          <h2 className="font-bold text-lg mb-2">Track Progress</h2>
          <p className="text-gray-600 text-center">Visualize your progress and stay motivated to complete your goals.</p>
        </div>
      </div>
    </div>
  );
}
