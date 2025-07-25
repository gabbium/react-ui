import PackageInfo from "../../../package.json";

const links = [{ label: "GitHub repo", href: PackageInfo.homepage }];

export const Welcome = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#fff",
        color: "#111",
        padding: "3rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1.5rem",
          maxWidth: "40rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.25rem", fontWeight: "300", margin: 0 }}>{PackageInfo.name}</h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "#2563eb",
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget.querySelector("span") as HTMLElement).style.transform = "translateX(2px)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget.querySelector("span") as HTMLElement).style.transform = "translateX(0)")
              }
            >
              {link.label} <span style={{ display: "inline-block", transition: "transform 0.2s ease" }}>→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
