# Bumble Match Story

A single-page read-only website that recreates the Bumble messaging UI and replays a conversation between Elly and John.

## Features

- 🎨 Bumble-inspired chat interface
- 📱 Full-screen mobile view with safe-area support
- 💻 Centered phone frame on desktop
- 📝 JSON-driven conversation content
- ✨ Smooth scrolling and native mobile feel

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customizing the Conversation

Edit `src/data/conversation.json` to update the conversation. The file supports:

- `meta`: Header information (title, subtitle, participants)
- `messages`: Array of message objects with `id`, `sender`, and `text` fields

Example:

```json
{
  "meta": {
    "title": "Elly",
    "subtitle": "Bumble"
  },
  "messages": [
    { "id": "m1", "sender": "elly", "text": "Hey :)" },
    { "id": "m2", "sender": "john", "text": "Hi there!" }
  ]
}
```

## Technical Stack

- **Vite** - Build tool
- **React** - UI framework
- **Tailwind CSS** - Styling

