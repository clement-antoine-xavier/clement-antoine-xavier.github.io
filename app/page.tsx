"use client";

import { useRouter } from "next/navigation";
import {
  AppBar,
  Button,
  Divider,
  Fieldset,
  List,
  ListItem,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { blogPosts, projects, skills } from "./data/content";

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function Home() {
  const router = useRouter();

  return (
    <main className="desktop-shell">
      <div className="desktop-grid">
        <Window className="portfolio-window">
          <WindowHeader>
            <span>about_me.exe</span>
          </WindowHeader>
          <WindowContent>
            <h1 style={{ margin: "0 0 10px", fontSize: 26 }}>Clément Antoine Xavier</h1>
            <p style={{ margin: "0 0 14px", lineHeight: 1.4 }}>
              Frontend engineer crafting memorable interfaces with strong product
              thinking and robust code.
            </p>
            <Fieldset label="Quick Facts" style={{ marginBottom: 12 }}>
              <List>
                <ListItem>Based in France</ListItem>
                <ListItem>Focused on web experiences</ListItem>
                <ListItem>Available for freelance and full-time roles</ListItem>
              </List>
            </Fieldset>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Button onClick={() => (window.location.href = "mailto:hello@example.com")} primary>
                Contact
              </Button>
              <Button onClick={() => openInNewTab("https://github.com")}>
                GitHub
              </Button>
              <Button onClick={() => openInNewTab("https://www.linkedin.com")}>
                LinkedIn
              </Button>
            </div>
          </WindowContent>
        </Window>

        <Window className="portfolio-window">
          <WindowHeader>
            <span>skills.ini</span>
          </WindowHeader>
          <WindowContent>
            <Fieldset label="Core Stack">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.map((skill) => (
                  <Button key={skill} variant="raised">
                    {skill}
                  </Button>
                ))}
              </div>
            </Fieldset>
          </WindowContent>
        </Window>

        <Window className="portfolio-window">
          <WindowHeader>
            <span>navigation.sys</span>
          </WindowHeader>
          <WindowContent>
            <p style={{ marginTop: 0 }}>Browse dedicated sections:</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Button onClick={() => router.push("/projects")} primary>
                Projects
              </Button>
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            </div>
          </WindowContent>
        </Window>

        <Window className="portfolio-window" style={{ gridColumn: "1 / -1" }}>
          <WindowHeader>
            <span>projects.bat</span>
          </WindowHeader>
          <WindowContent>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 10,
              }}
            >
              {projects.slice(0, 3).map((project) => (
                <Fieldset key={project.title} label={project.title}>
                  <p style={{ marginTop: 0, minHeight: 48 }}>{project.description}</p>
                  <Button onClick={() => openInNewTab(project.href)}>
                    Open
                  </Button>
                </Fieldset>
              ))}
            </div>
          </WindowContent>
        </Window>

        <Window className="portfolio-window" style={{ gridColumn: "1 / -1" }}>
          <WindowHeader>
            <span>blog_preview.txt</span>
          </WindowHeader>
          <WindowContent>
            <List>
              {blogPosts.map((post) => (
                <ListItem key={post.title}>
                  <strong>{post.title}</strong> - {post.date} ({post.readingTime})
                </ListItem>
              ))}
            </List>
          </WindowContent>
        </Window>
      </div>

      <AppBar position="fixed" style={{ top: "auto", bottom: 0 }}>
        <Toolbar style={{ justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Button active>Start</Button>
            <Button onClick={() => router.push("/projects")}>Projects</Button>
            <Button onClick={() => router.push("/blog")}>Blog</Button>
            <Divider orientation="vertical" size={22} />
            <span>Ready</span>
          </div>
          <span>{new Date().toLocaleDateString("fr-FR")}</span>
        </Toolbar>
      </AppBar>
    </main>
  );
}
