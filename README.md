# 🚀 SnippetShare

**SnippetShare** is a minimalist, high-performance web application designed for developers to share code snippets instantly. Unlike traditional pastebins, SnippetShare is **entirely stateless**—it stores no data in a database. Instead, your code, theme, and language settings are compressed and encoded directly into the URL.

## ✨ Features

- **Zero-Database Architecture**: Every shared link is a self-contained state. Your data never touches a disk.
- **Persistent Configuration**: Saves your **Theme** (VS Dark, Dracula, Nord), **Language** (TS, Rust, Python, etc.), and **Custom Filename** within the URL hash.
- **Dynamic UI**: A "Linear-style" interface featuring a renamable file header that dynamically adjusts its width based on your input.
- **IntelliSense Powered**: Built with the Monaco Editor for a full-featured coding experience directly in the browser.
- **High Compression**: Utilizes the `zlib` deflate algorithm to keep sharing URLs as short as possible.

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS
- **State Management**: Jotai (Atomic State)
- **Icons**: React Icons (Tabler Icons)
- **Editor**: @monaco-editor/react
- **Backend**: Next.js Route Handlers (Stateless API)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/yourusername/snippet-share.git](https://github.com/yourusername/snippet-share.git)
    cd snippet-share
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🧠 How it Works

SnippetShare uses a stateless flow to ensure privacy and speed:

1.  **Capture**: The app gathers the code, language, theme, and filename from the Jotai store.
2.  **Compress**: The data is stringified and compressed using the `zlib` deflate algorithm via a Next.js API route.
3.  **Encode**: The resulting binary data is converted to a **URL-safe Base64** string.
4.  **Share**: The string is appended to the URL hash (`/#<hash>`). When a user visits the link, the process is reversed to hydrate the editor state.

## 📄 License

Distributed under the MIT License.
