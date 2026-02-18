# Chef Qwen 

Chef Qwen is a simple AI-powered recipe generator.  
Enter the ingredients you have on hand, and Chef Qwen will suggest an authentic dish along with preparation steps and pro cooking tips.

---

## Features

- Add ingredients dynamically
- Generate recipes using AI
- Authentic dish suggestions
- Clean, responsive interface
- Serverless API for secure key handling

---

## Tech Stack

- React
- Vite
- Serverless functions (Vercel API routes)
- Hugging Face Inference API

---

## How It Works

1. User adds ingredients to the list.
2. Once enough ingredients are provided, the **Get a recipe** option appears.
3. The request is sent to a serverless function.
4. The serverless function securely calls the AI model.
5. The generated recipe is returned and displayed on the page.

---

## Project Structure

```
project-root/
├── api/
│   └── recipe.js        # Serverless function
├── src/
│   ├── components/
│   ├── ai.js            # Frontend API call
│   └── main.jsx
├── public/
├── .env                 # API key (ignored by git)
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the project root:

```
HF_API_KEY=your_huggingface_api_key
```

This key is used **only in the serverless function** and is never exposed to the browser.

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the Vercel development server:

```bash
vercel dev
```

This runs both:
- The frontend
- The serverless API

---

## Deployment

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variable:

```
HF_API_KEY
```

4. Deploy.

---

## Future Improvements

- Save favorite recipes
- Ingredient suggestions
- Dark mode
- Voice input
- Nutrition information

---

## License

This project is licensed under the MIT License.
