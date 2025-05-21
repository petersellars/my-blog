# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## When to Create a Release
Create a new release whenever you make meaningful changes that affect the behavior or functionality of the blog — such as adding features, fixing bugs, improving performance, or introducing breaking changes. Examples include updating components, adding new pages, or modifying critical dependencies. Minor updates that don't impact users—like internal refactors, documentation updates, or typo fixes—typically do not require a new release.

### [Unreleased]

#### Added

- This CHANGELOG now provides a curated, chronological list of notable changes for each version.
- Integrated [Contentful](https://www.contentful.com/) as a headless CMS to populate blog content.
- Configured [Astro](https://astro.build/) with [Tailwind CSS](https://tailwindcss.com/) (v4) for theme styling. See [Astro/Tailwind](https://docs.astro.build/en/guides/styling/#tailwind) for details.
- Added an initial Tailwind CSS-based blog theme.
- Enabled [Preact](https://preactjs.com/) integration in Astro for building UI components. See [Astro/Preact](https://docs.astro.build/en/guides/integrations-guide/preact/) for more info.
- Created the initial [Hero](src/components/sections/Hero.tsx) component.
- Set up [Storybook](https://storybook.js.org/) for developing and testing UI components.
- Added initial Storybook stories for the [Hero](src/components/sections/Hero.stories.tsx) component.

<!-- 
When making a new release, add it below the 'unreleased' entry to keep the release list in reverse chronological order
-->
[unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/main...HEAD