# Portfolio

A colourful HTML, CSS and JavaScript portfolio. No npm installation or build step is needed.

## Open in VS Code
1. Extract this ZIP.
2. In VS Code, select File > Open Folder and choose Portfolio.
3. Open index.html to edit the page content.

## Run
For a quick preview, double-click index.html in File Explorer.
For local hosting, open the VS Code terminal in this folder and run:

```sh
python -m http.server 5500 --bind 127.0.0.1
```

On Windows, if python is not recognised but Python is installed, try:

```sh
py -m http.server 5500 --bind 127.0.0.1
```

Visit http://localhost:5500 in your browser. Press Ctrl+C in the terminal to stop.
You can also use VS Code's Live Server extension if it is already installed.

## Files
- index.html: text, skills, projects, links and layout structure.
- style.css: colours, typography, responsive layouts and light/dark themes.
- app.js: project filters, theme preference and copy-email behaviour.

## Included interactions
- All / Java / Mobile / AI / Hardware project filters.
- Expandable project details using native HTML details controls.
- Light/dark theme toggle; preference saved when browser storage is available.
- Copy-email button; manual-copy guidance if clipboard access is unavailable.
- Section navigation, GitHub links and email links.

## Notes
Clipboard access depends on browser permissions and context; use localhost for the best local experience. Email links open your configured email application. GitHub links require internet access. No contact form, backend, API keys, or package dependencies are required.

JavaScript logic checks passed for filters, theme persistence, storage failures and clipboard outcomes. Browser visual and mobile-device testing has not been completed.
