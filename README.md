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

