# React UI (Snippets)

![GitHub last commit](https://img.shields.io/github/last-commit/gabbium/react-ui)
![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/gabbium_react-ui?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Coverage](https://img.shields.io/sonar/coverage/gabbium_react-ui?server=https%3A%2F%2Fsonarcloud.io)
[![Netlify Status](https://api.netlify.com/api/v1/badges/696c6422-1072-4789-b322-81f53b90fda3/deploy-status)](https://app.netlify.com/projects/react-ui-gabbium/deploys)
[![Storybook](https://img.shields.io/badge/Storybook-live-blue?logo=storybook)](https://react-ui-gabbium.netlify.app)

> ⚡ This project is **not a published library**.\
> It works as a **catalog of React UI snippets** built with **Radix
> UI**, **Tailwind**, and **TypeScript**, to be copied and adapted into
> other projects.\
> Documentation and live examples are available in **Storybook**.

---

## ✨ Features

- ✅ **Accessible components** (powered by Radix UI)\
- ✅ **Tailwind styling** with utility variants\
- ✅ **Reusable snippets** → copy the code and use it in your project\
- ✅ **Fully typed** with TypeScript\
- ✅ **Live documentation** in Storybook

---

## 🚀 How to Use

1.  Open [**Storybook Live**](https://react-ui-gabbium.netlify.app) to
    explore components.\
2.  Copy the component code from the `src/` folder.\
3.  Paste it into your project and adapt as needed.

Example:

```tsx
// copied from src/button.tsx
import { Button } from "@/components/button";

export function Example() {
  return <Button>Click me</Button>;
}
```

---

## 🧪 Local Development

```bash
npm install
npm run storybook
```

- Development and testing happen inside **Storybook**.\
- Each component has documented variations and use cases.

---

## 📘 Structure

    src/
    ├── button.tsx      # Example base component
    ├── input.tsx       # Other components
    └── ...

---

## 📘 Docs

Explore all components at [**Storybook
Live**](https://react-ui-gabbium.netlify.app).

---

## 🪪 License

This project is licensed under the MIT License – see [LICENSE](LICENSE) for details.
