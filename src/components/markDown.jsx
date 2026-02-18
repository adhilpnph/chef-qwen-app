import React from "react";
import ReactMarkdown from "react-markdown";

const markdownContent = `
### 👨‍🍳 Welcome to Your Authentic Recipe Companion

Hi! I’m **your personal recipe recommendation assistant**, built for one thing and one thing only:  
**turning the ingredients you already have into an authentic, delicious dish**.

#### How it works

- 🥕 You give me a list of ingredients **(Atleast 4)** — specific or vague, whatever you’ve got.
- 🍽️ I suggest a real, authentic recipe that makes sense culturally and culinarily.
- 🔥 Optional **top-tier chef tips** are included to elevate the dish from good to unforgettable.



Wishing you great cooking and even better meals 🍽️✨  
**Welcome to the kitchen.**
`;

export default function MarkDown() {
  return(
<ReactMarkdown>{markdownContent}</ReactMarkdown>
  ) 
}
