document.getElementById("summarizeBtn").addEventListener("click", async () => {
  const inputText = document.getElementById("inputText").value.trim();
  const outputDiv = document.getElementById("output");

  if (!inputText) {
    outputDiv.textContent = "⚠️ Please enter some text first.";
    return;
  }

  outputDiv.textContent = "⏳ Summarizing...";

  try {
    // Simulated Summarizer API (demo purpose)
    const response = await fakeSummarizeAPI(inputText);
    outputDiv.textContent = "✅ Summary:\n" + response;
  } catch (error) {
    outputDiv.textContent = "❌ Error: " + error.message;
  }
});

async function fakeSummarizeAPI(text) {
  // Simple mock summary (you can later replace with Chrome’s Summarizer API)
  const sentences = text.split(".");
  const summary = sentences.slice(0, 2).join(".") + ".";
  return summary || "No summary generated.";
}
