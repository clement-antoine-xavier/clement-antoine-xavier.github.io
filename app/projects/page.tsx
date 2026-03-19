"use client";

import { useRouter } from "next/navigation";
import {
  AppBar,
  Button,
  Divider,
  Fieldset,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { projects } from "../data/content";

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="desktop-shell">
      <div className="desktop-grid">
        <Window className="portfolio-window" style={{ gridColumn: "1 / -1" }}>
          <WindowHeader>
            <span>projects_explorer.exe</span>
          </WindowHeader>
          <WindowContent>
            <h1 style={{ margin: "0 0 14px", fontSize: 26 }}>Projects</h1>
            <p style={{ margin: "0 0 18px", lineHeight: 1.4 }}>
              A selection of things I designed and built, from product interfaces
              to reusable frontend systems.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 12,
              }}
            >
              {projects.map((project) => (
                <Fieldset key={project.title} label={project.title}>
                  <p style={{ marginTop: 0 }}>{project.description}</p>
                  <p style={{ margin: "8px 0 12px" }}>
                    <strong>Stack:</strong> {project.stack}
                  </p>
                  <Button onClick={() => openInNewTab(project.href)}>Open</Button>
                </Fieldset>
              ))}
            </div>
          </WindowContent>
        </Window>
      </div>

      <AppBar position="fixed" style={{ top: "auto", bottom: 0 }}>
        <Toolbar style={{ justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Button onClick={() => router.push("/")}>Home</Button>
            <Button active>Projects</Button>
            <Button onClick={() => router.push("/blog")}>Blog</Button>
            <Divider orientation="vertical" size={22} />
            <span>Portfolio</span>
          </div>
          <span>{new Date().toLocaleDateString("fr-FR")}</span>
        </Toolbar>
      </AppBar>
    </main>
  );
}
