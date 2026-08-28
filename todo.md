# Dedicated Medium Blog

- [x] Inventory Pragya’s Medium profile and publicly available posts.
- [x] Create a separate Blog route with terminal-style navigation back to the portfolio.
- [x] Import the available Medium writing into the new Blog page with source links.
- [x] Validate Blog navigation, article presentation, and mobile layout: the separate archive and imported post are clear at desktop and 375px widths.
- [x] Validate the dedicated Medium Blog page and production build, ready for the release checkpoint.

## Blog Refinement

- [x] Match Blog headline and metadata sizes to the homepage hierarchy.
- [x] Widen the Blog content box while preserving mobile containment.
- [x] Retrieve and import original Medium post images where publicly available.
- [x] Validate the refinement: matched homepage typography, wider reader, original screenshots, and responsive single-column presentation are verified.

## Blog Header and Typography Refinement

- [x] Slightly reduce the `small fixes...` headline.
- [x] Increase supporting Blog intro, archive index, imported-post metadata, and article-body type to match the homepage more closely.
- [x] Add a visible Home button.
- [x] Replace the left `SIDEQUEST://` mark with larger terminal-style `root/pragya/` and `writing.log` header text.
- [x] Validate desktop/mobile layouts and save a checkpoint.

## Persistent Header and Loader Scope

- [x] Bring the `root/pragya/` terminal header to the main page and keep its page context changing across routes.
- [x] Make `root/pragya/` the only Home control on secondary pages, with a hover color signal; remove the right-corner Home button.
- [x] Keep the four-second loading screen limited to the initial visit, not route switching.
- [x] Remove the loading-screen top-left `SIDEQUEST://` mark and logo.
- [x] Validate navigation, reload behavior, and responsive presentation, then save a checkpoint.

## Validation Findings

Desktop route checks confirm the homepage and Blog share the larger root/pragya terminal header, with route-specific labels (`home` and `writing.log`). The loader no longer shows the top-left logo or `SIDEQUEST://` brand. The Blog header has no duplicate Home button; its synced-from-Medium status sits beside the Medium source link and should be visually separated to avoid the repeated “Medium” reading.

Final validation confirms the homepage header reads `root/pragya/ home`, the Blog header reads `root/pragya/ writing.log`, and the Blog’s right-side Home button is removed. The Blog source label is now separated from the Medium link for cleaner header reading. The initial-only loader behavior and removal of its top-left brand are implemented in Home.tsx.

## Immediate Route Switching

- [x] Ensure the four-second loader appears only on the first website entry in a browser session.
- [x] Ensure Home ↔ Blog navigation switches immediately without replaying the loader.
- [x] Validate both directions and responsive behavior, then save a checkpoint.

Route validation findings: a fresh Home capture shows the Minecraft loader still running for the intended four-second entry sequence, with no top-left logo or SIDEQUEST mark. The Blog route renders directly in the same session without the loader. This confirms the loader is scoped to initial Home entry rather than in-app page switching.
