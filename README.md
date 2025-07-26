# React UI

![GitHub last commit](https://img.shields.io/github/last-commit/gabbium/react-ui)
![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/gabbium_react-ui?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Coverage](https://img.shields.io/sonar/coverage/gabbium_react-ui?server=https%3A%2F%2Fsonarcloud.io)
[![Netlify Status](https://api.netlify.com/api/v1/badges/696c6422-1072-4789-b322-81f53b90fda3/deploy-status)](https://app.netlify.com/projects/react-ui-gabbium/deploys)
![npm](https://img.shields.io/npm/v/@gabbium/react-ui)
[![Storybook](https://img.shields.io/badge/Storybook-live-blue?logo=storybook)](https://react-ui-gabbium.netlify.app)

A modern and customizable React component library built with **Emotion**, **Radix UI**, and fully typed with **TypeScript**.  
Designed for **accessibility**, **developer experience**, and **runtime theming** (light/dark).

---

## ✨ Features

- ✅ **Accessible components** powered by Radix UI
- ✅ **Scoped styling** with Emotion (no global CSS conflicts)
- ✅ **Runtime theming** with CSS variables (`light`/`dark` mode)
- ✅ **Tree-shakable ESM build**
- ✅ **Fully typed** with TypeScript
- ✅ **Live docs** with Storybook

---

## 🧱 Tech Stack

| Layer       | Stack                             |
| ----------- | --------------------------------- |
| Components  | React + Radix UI                  |
| Styling     | Emotion + CSS Variables           |
| Tooling     | Vite + TypeScript                 |
| Docs        | Storybook                         |
| Testing     | Vitest + Testing Library          |
| Lint/Format | ESLint + Prettier                 |
| CI/CD       | GitHub Actions + semantic-release |

---

## 📦 Installation

```bash
npm install @gabbium/react-ui
```

No Tailwind or external setup required – works with any React project.

---

## 🚀 Usage

Import the component and optionally the theme tokens:

```tsx
import { Button } from "@gabbium/react-ui";

export const Example = () => {
  return <Button>Click me</Button>;
};
```

## 🧪 Local Development

```bash
npm install
npm run storybook
```

All development, preview, and testing are done inside Storybook.

---

## ✅ Testing

This project uses **Storybook** as the primary testing environment:

- **Interaction Tests** – validate user behavior directly in stories
- **Accessibility Tests** – automatic a11y checks via Storybook addons
- **Coverage Reports** – generated from Storybook stories

You can explore, test, and validate components interactively in the live Storybook.

---

## 🔄 Releases & Versioning

This project uses **[semantic-release](https://semantic-release.gitbook.io/semantic-release/)** for fully automated versioning:

- **feat:** → minor version bump (0.x.0 → 0.(x+1).0)
- **fix:** → patch version bump (0.0.x → 0.0.(x+1))
- **feat!: / BREAKING CHANGE:** → major version bump (x.0.0 → (x+1).0.0)

Every merge into `main` automatically:

- Updates `CHANGELOG.md`
- Creates a GitHub release
- Publishes a new version to npm

See all changes in the [CHANGELOG.md](./CHANGELOG.md).

---

## 🧱 Project Structure

```
src/
├── components/    # Component source files
├── utils/         # Utility functions, helpers
├── theme/         # Theme tokens & CSS variables
└── index.ts       # Library entrypoint
```

---

## 📘 Docs

Explore all components on [**Storybook Live**](https://react-ui-gabbium.netlify.app)

---

## 🪪 License

This project is licensed under the MIT License – see [LICENSE](LICENSE) for details.
