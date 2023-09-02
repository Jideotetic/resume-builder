import '../styles/Main.css';

export default function Main({ children, status, width, breakPoint }) {
  return (
    <main>
      <div
        className="main"
        style={{
          display:
            width >= breakPoint &&
            (status === 'creating' || status === 'previewing')
              ? 'grid'
              : null,
        }}>
        {children}
      </div>
    </main>
  );
}
