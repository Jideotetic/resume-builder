import '../styles/Main.css';

export default function Main({ children }) {
  return (
    <main>
      <div className="main">{children}</div>
    </main>
  );
}
