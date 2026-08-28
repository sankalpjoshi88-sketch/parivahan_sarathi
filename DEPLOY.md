# Deploy to GitHub Pages

Only the **contents** of this `Code/` folder should be placed in the publishing repository. `index.html` must be at the repository root—not inside a nested `Code/` folder.

1. Create an empty GitHub repository, for example `saathi-ll-prototype`.
2. From inside `Code/`, initialise Git and push these files to the repository’s default branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the default branch (usually `main`) and folder **/ (root)**, then save.
6. Wait for the Pages deployment to complete.

The site will be available at:

`https://<github-username>.github.io/saathi-ll-prototype/`

## Verify after deployment

- Open the site root and dismiss the demo notice.
- Complete a few screens, refresh, and confirm progress remains saved.
- Open a bookmarked route such as `#/documents` directly.
- Confirm the browser console has no missing assets.
- Test at 375 px width and with browser zoom set to 150%.

The included `.nojekyll` disables Jekyll processing. All runtime references are relative and navigation uses URL hashes, so the prototype works under a GitHub project subpath.
