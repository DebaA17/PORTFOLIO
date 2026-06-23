<h1 align="center">PORTFOLIO</h1>

<div align="center">

[![Docker Build & Security Scan](https://github.com/DebaA17/PORTFOLIO/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/DebaA17/PORTFOLIO/actions/workflows/docker-publish.yml)
[![Security Headers](https://img.shields.io/endpoint?url=https://debasisbiswas.in/api/security-badge)](https://securityheaders.com/?q=https://debasisbiswas.in&followRedirects=on)

</div>

![Preview](/public/preview.png)



Welcome to the PORTFOLIO project! This is a modern, responsive portfolio built with Next.js and Tailwind CSS, designed to showcase my skills, projects, and contact information in a clean and professional manner.

## Features

- ⚡ Fast and optimized with Next.js
- 🎨 Beautiful UI powered by Tailwind CSS
- 📱 Fully responsive for all devices
- 🧩 Modular components for easy customization
- 📝 Contact form integration
- 📊 Project and skill showcase
- 🌙 Dark mode support
- 🔒 Security best practices

## Getting Started

1. **Install dependencies**
   ```zsh
   pnpm install
   ```
2. **Run the development server**
   ```zsh
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Docker/Podman Local Usage

You can run this portfolio locally in a container using Docker or Podman.

### Run the prebuilt image (Recommended • no build needed)

If you just want to run the latest image from GitHub Container Registry:

```sh
docker run --rm -p 3000:3000 ghcr.io/debaa17/portfolio:main
```

### Build the image
```sh
# With Docker:
docker build -t portfolio .
# With Podman:
podman build -t portfolio .
```

### Run the container
```sh
# With Docker:
docker run -p 3000:3000 portfolio
# With Podman:
podman run -p 3000:3000 portfolio
```


### List images
```sh
docker images   # or podman images
```

### Clean up unused containers/images
```sh
docker system prune   # or podman system prune
```

## Project Structure

```
PORTFOLIO/
├── app/                # Next.js app directory
├── components/         # Reusable React components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (preview.png, etc.)
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── ...
```

## Customization

- Update your information in the relevant components (e.g., `about.tsx`, `contact.tsx`, `projects.tsx`).
- Replace the preview image in `/public/preview.png` with your own.
- Modify styles in `app/globals.css` and `tailwind.config.ts` as needed.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

<a href="https://www.buymeacoffee.com/debasisbiswas" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
---

Made with ❤️ by DEBASIS
