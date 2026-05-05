const newsletterEndpoint =
  "https://amhxnojzpplpfqvxdvug.supabase.co/functions/v1/newsletter-signup";

document.addEventListener("submit", async (e) => {
  const form = e.target;

  // Kun footer-form
  if (form.id !== "footer-newsletter-form") return;

  e.preventDefault();

  const emailInput = form.querySelector('input[type="email"]');
  const message = document.getElementById("footer-newsletter-message");

  if (!emailInput || !message) return;

  const email = emailInput.value.trim();

  if (!email) {
    message.textContent = "Skriv inn e-postadressen din.";
    message.style.color = "red";
    return;
  }

  message.textContent = "";
  message.style.color = "black";

  try {
    const res = await fetch(newsletterEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const text = await res.text();
    let data = {};

    try {
      data = JSON.parse(text);
    } catch {}

    if (!res.ok) {
      message.textContent = data.error || "Noe gikk galt.";
      message.style.color = "red";
      return;
    }

    if (data.alreadyExists) {
      message.textContent = "Du er allerede påmeldt.";
      return;
    }

    message.textContent = "Takk! Du er nå påmeldt ✨";
    message.style.color = "green";
    form.reset();

  } catch (err) {
    console.error("FETCH ERROR:", err);
    message.textContent = "Fikk ikke kontakt med serveren.";
    message.style.color = "red";
  }
});