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
import { blogPosts } from "../data/content";

export default function BlogPage() {
  const router = useRouter();

  return (
    <main className="desktop-shell">
      <div className="desktop-grid">
        <Window className="portfolio-window" style={{ gridColumn: "1 / -1" }}>
          <WindowHeader>
            <span>blog_reader.exe</span>
          </WindowHeader>
          <WindowContent>
            <h1 style={{ margin: "0 0 14px", fontSize: 26 }}>Blog</h1>
            <p style={{ margin: "0 0 18px", lineHeight: 1.4 }}>
              Notes on frontend engineering, design systems, and product craft.
            </p>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <Fieldset key={post.title} label={post.title}>
                  <p style={{ marginTop: 0 }}>{post.excerpt}</p>
                  <p style={{ margin: "8px 0 4px" }}>
                    <strong>Date:</strong> {post.date}
                  </p>
                  <p style={{ margin: "0 0 8px" }}>
                    <strong>Reading:</strong> {post.readingTime}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {post.tags.map((tag) => (
                      <Button key={tag} size="sm" variant="raised">
                        {tag}
                      </Button>
                    ))}
                  </div>
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
            <Button onClick={() => router.push("/projects")}>Projects</Button>
            <Button active>Blog</Button>
            <Divider orientation="vertical" size={22} />
            <span>Writing</span>
          </div>
          <span>{new Date().toLocaleDateString("fr-FR")}</span>
        </Toolbar>
      </AppBar>
    </main>
  );
}
