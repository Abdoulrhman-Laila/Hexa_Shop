/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",    // مسارات جميع ملفات الصفحات
    "./components/**/*.{js,ts,jsx,tsx}", // مسارات جميع ملفات المكونات
    "./app/**/*.{js,ts,jsx,tsx}",        // إذا كنت تستخدم App Router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}