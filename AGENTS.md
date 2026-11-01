<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All portfolio content (profile, skills, projects, education, certifications) lives in `src/data/portfolio.ts`; section components only render it — edit content there, not in components.
- Section components live in `src/components/portfolio/` and are composed on the single `/` route; scroll reveal uses the shared `Reveal` component plus the `reveal` utility in `src/styles.css`.
