export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center text-sm border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)", color: "#555577" }}
    >
      <p>
        Built by{" "}
        <a
          href="https://github.com/DeemonDuck"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6c63ff", textDecoration: "none" }}
        >
          Ridham Taneja
        </a>{" "}
        · React + TypeScript + Framer Motion
      </p>
    </footer>
  );
}
