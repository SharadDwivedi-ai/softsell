import { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm SoftSell Assistant. Ask me anything about selling your license!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages([...messages, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMsg }]
        })
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't generate a response.";
      setMessages((msgs) => [...msgs, { from: "bot", text: reply }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { from: "bot", text: "Error contacting AI. Please try again later." }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col">
      <div className="bg-blue-600 text-white px-4 py-2 font-semibold">💬 SoftSell Chat</div>
      <div className="flex-1 p-3 h-64 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "bot" ? "text-left" : "text-right"}>
            <span className={m.from === "bot" ? "bg-gray-200 dark:bg-gray-600" : "bg-blue-500 text-white"} 
                  style={{ borderRadius: '12px', padding: '6px 10px', display: 'inline-block', marginBottom: '4px' }}>
              {m.text}
            </span>
          </div>
        ))}
        {loading && <div className="text-sm text-gray-500">Typing...</div>}
      </div>
      <div className="p-2 border-t flex">
        <input
          className="flex-1 p-2 border rounded-l"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 rounded-r">Send</button>
      </div>
    </div>
  );
}
