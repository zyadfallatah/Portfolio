---
slug: mawsem-en
---

# A demand forecasting tool for Saudi retail

## One reason Sanad exists

Our team submitted the first graduation project the right way — organized, complete, on time. Six months later, I couldn't find the work. The report was in Google Docs. The slides were in Canva. Browser autocomplete found the report before I did.

> That was one of the main reasons [Sanad](/en/projects/sanad) exists.

## The Problem

Three weeks of manual work before every season. A procurement manager needs to calculate how much to order for Ramadan, for Eid, for Hajj — product by product, using last year's Excel sheets and accumulated experience. General-purpose tools don't understand the Hijri calendar and don't know when Ramadan or Hajj starts. The result: empty shelves, stuck inventory, or excess ordering.

## What Mawsem Does

- Analyzes historical sales data from the previous season
- Maps it against the Hijri calendar — Ramadan, Eid, Hajj
- Outputs one clear recommendation per product: the quantity to order for the upcoming season

## My Contribution

| Feature | What I built |
| --- | --- |
| Landing page | Full design and implementation |
| Auth screens | Login and register flows |
| Dashboard | Hijri-aware demand curve chart, stock recommendation card, confidence score display |
| Products & Sales | CRUD views for managing inventory and historical data |
| Forecast display | Presentation layer for the ML model's output |
| Sales file upload (new) | Flexibility to import any sales data as long as it matches the core columns |

> Full frontend scope, all mine.

The rest (Laravel, Python, MariaDB) was built by the team.

## Stack

| Layer | Technology |
| --- | --- |
| Frontend | React |
| Backend | Laravel / PHP |
| AI/ML | Python — pretrained seasonal forecasting model |
| Database | MariaDB |
| Infrastructure | Synology Server |

## My Personal Experience

- Uploading Excel files with Arabic content was a headache. Someone could upload an incorrectly encoded CSV and end up with completely garbled column names. The fix involved a lot of research into file encoding and how the file gets parsed.
- Laravel really does not like being separated from its frontend. Trying to decouple React caused endless CORS and CSRF issues, plus non-stop Vite config to make React act as a proxy that Laravel would accept. Fortunately the latest version ships bundled with Laravel.
- What happens when the app is a bit slow? A lot of loading screens — just to keep the UX functional. Before adding them, I wasn't sure whether the app was working or not. Neither would a procurement manager.
- There was a bug where the analysis was mapping everything to Muharram only. And for some reason the model assumed Ramadan always needs the highest order quantity — honestly a fair assumption 🙂
- I did tweak a few things in Laravel here and there, but not much.
