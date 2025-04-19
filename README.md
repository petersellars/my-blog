# My Blog

[![Keep a Changelog](https://img.shields.io/badge/keepachangelog-1.1.0-blue?logo=Keep%20A%20Changelog&logoColor=white&labelColor=%23E05735)
](https://keepachangelog.com/)

TODO: Add Netlify Build Status

This blog uses [Contentful](https://www.contentful.com/) to manage content for an [Astro](https://astro.build/)-powered website. It supports rich content types such as blog posts and homepage sections, and uses Netlify's free tier to provide deploy previews for PRs.

## Astro
This blog is built using [Astro](https://astro.build/).

## Contentful
This blog uses [Contentful](https://www.contentful.com/) to manage content

TODO: Add how to use environments for development changes of the contentful model.

## :fuelpump: Contentful Content Models

### `BlogPost`
| Field         | Type        |
|---------------|-------------|
| `title`       | Short text  |
| `date`        | Date & time |
| `slug`        | Short text  |
| `description` | Short text  |
| `content`     | Rich text   |
