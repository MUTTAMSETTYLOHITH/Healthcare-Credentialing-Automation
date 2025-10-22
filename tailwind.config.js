/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0.6rem rgba(56,189,248,0.35), 0 0 2rem rgba(59,130,246,0.2)",
        soft: "0 20px 60px rgba(15,23,42,0.5)"
      },
      backgroundImage: {
        mesh: "radial-gradient(50rem 50rem at 10% 10%, rgba(59,130,246,0.18), transparent), radial-gradient(60rem 40rem at 90% 30%, rgba(16,185,129,0.16), transparent), radial-gradient(60rem 60rem at 50% 120%, rgba(147,51,234,0.14), transparent)"
      }
    }
  },
  plugins: [],
};
