# Image Sorting App

A modern and interactive image gallery built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
This app allows you to upload, sort (via drag-and-drop), select, and delete images in an intuitive and responsive UI.

---

## Features

- 🖼️ **Image Gallery:** View your collection in a responsive grid.
- 🟦 **Drag & Drop Sorting:** Reorder images with smooth drag-and-drop using `react-dnd`.
- ➕ **Image Upload:** Add new images directly from your device.
- ✅ **Image Selection & Bulk Delete:** Select multiple images and delete them in one action.
- 🌈 **Modern UI:** Styled with Tailwind CSS for a fresh and clean look.
- ⚡ **Fast Development:** Powered by Vite for instant hot reload and quick builds.
- 🔒 **Type-Safe:** Written entirely in TypeScript.

---

## Demo

<!-- Optionally insert a screenshot or GIF here -->
<!-- ![App Screenshot](screenshot.png) -->

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**

### Installation

```bash
git clone https://github.com/Tanvir-Alam625/Image-Sorting-App.git
cd Image-Sorting-App
npm install
# or
yarn install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

---

## Usage

- **Upload Images:** Click "Add Image" and select images from your device.
- **Reorder Images:** Drag and drop images within the gallery to reorder them.
- **Select Images:** Click on images to select. Use the delete button to remove selected images.
- **Bulk Actions:** Select multiple images for bulk deletion.

---

## Project Structure

```plaintext
├── src/
│   ├── components/      # React components (Gallery, Header, Image, etc.)
│   ├── data/            # Static data (initial images)
│   ├── utils/           # Utility functions (uploader, uniqueId, etc.)
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind CSS setup
├── public/              # Static assets (if any)
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── ...
```

---

## Tech Stack

- **React** (with Hooks)
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **react-dnd** (for drag and drop)
- **ESLint** & **Prettier** (for code quality)
- **Jest** or other testing tools (if added)

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Author

**Tanvir Alam**  
[GitHub Profile](https://github.com/Tanvir-Alam625)
