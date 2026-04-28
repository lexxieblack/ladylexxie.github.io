## Lexxie's Minecraft Javadocs

A central hub for accessing Javadocs across various Minecraft versions and mod loaders (NeoForge, Fabric, and Forge). This project provides a clean, responsive interface with a dynamic data-loading system and theme support.

### Features

- **Dynamic Data Loading:** Versions are fetched from a central versions.json file, making it easy to update without touching HTML.
- **Refined UI/UX:** Professional "Slate & Crimson" color palette designed for high legibility and reduced eye strain.
- **Adaptive Theme:** Supports Light and Dark modes with persistent storage (saves your preference via localStorage).
- **Responsive Design:** Fully functional on mobile, tablet, and desktop devices.
- **GitHub Pages Ready:** Optimized for hosting as a static site.

### Project Structure

```
├── index.html      # Main page structure
├── styles.css      # Custom "Slate & Crimson" theme styles
├── script.js       # Dynamic table loader and theme logic
└── versions.json   # Central registry for all Minecraft versions
```

### How to Add New Versions

To update the table simply add a new entry to the versions.json file following this format:

```json
{
  "minecraft": "1.21.1",
  "neoforge": { "version": "21.1.168", "url": "https://url-to-docs" },
  "fabric": { "version": "0.115.6", "url": "https://url-to-docs" },
  "forge": null
}
```

If a loader is not available for a specific version, set its value to null.
The version field is the text displayed in the table.
The url field is where the user is directed when they click the version.

*Maintained with ❤️ for the Minecraft Modding Community.*
