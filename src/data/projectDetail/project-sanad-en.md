---
slug: sanad-en
---

# From idea to shipped product — a gateway to a lot of real engineering

## What Sanad does — and how it was built

| Feature | What I built |
| --- | --- |
| Mission | Shared goal with a fixed deadline, Hijri calendar support, auto-closes on completion |
| Vault | Session-scoped file storage — upload, download, live sync for everyone present |
| Live Presence | Real-time tracking of active members and current attendance |
| Mission Report | Auto-generated summary at close, with member engagement breakdown |
| Threaded Chat | Organized conversations for speed and focused contribution |

## Why these technologies specifically

- **Fastify** — lightweight, fast, and scales to what's needed without getting in the way
- **Socket.io** — handles the real-time features inside rooms and sessions cleanly
- **PostgreSQL** — sessions, users, tasks, reports — all relational, all permanent
- **Redis** — fast presence tracking; no need to persist it beyond the session
- **Cloudflare R2** — file storage at a fraction of S3's cost
- **TanStack Start** — full control over how data is rendered: server-first or fully client-side. Sessions are purely interactive

## What I took away from building this

> Building this app meant learning a lot of concepts by actually needing them

- Server-side file handling is nothing like just accepting an upload — I ran into streaming and it clicked the moment I needed it
- Event emitters were something I'd heard about in Node — then I realized every advanced concept I was using was built on them. They're the foundation of streaming and WebSockets
- React was supposed to be the easy part. Then presence tracking pushed me toward useRef, which I'd read about constantly but never understood until I had a real problem that required it
- There was no tutorial for this. Building the architecture, making design decisions, turning an idea into a working system — it's a completely different experience when there's no one to follow, just problems to solve

> The most important thing: this wasn't practice. It was solving a real organizational and collaboration problem — one I had personally.
