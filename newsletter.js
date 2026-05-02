const newsletterEndpoint =
  "https://amhxnojzpplpfqvxdvug.supabase.co/functions/v1/newsletter-signup";

document.addEventListener("submit", async (e) => {
  const form = e.target;

  if (
    form.id !== "footer-newsletter-form" &&
    form.id !== "newsletter-form"
  ) {
    return;
  }

  e.preventDefault();

  const emailInput = form.querySelector('input[type="email"]');

  const message =
    form.id === "footer-newsletter-form"
      ? document.getElementById("footer-newsletter-message")
      : document.getElementById("newsletter-message");

  if (!emailInput || !message) return;

  const email = emailInput.value.trim();

  if (!email) {
    message.textContent = "Skriv inn e-postadressen din.";
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

    console.log("STATUS:", res.status);
    console.log("RESPONSE:", text);

    let data = {};

    try {
      data = JSON.parse(text);
    } catch {}

    if (!res.ok) {
      message.textContent = data.error || text || "Noe gikk galt.";
      return;
    }

    if (data.alreadyExists) {
      message.textContent = "Du er allerede påmeldt nyhetsbrevet.";
      return;
    }

    message.textContent = "Takk! Du er nå påmeldt nyhetsbrevet.";
    form.reset();
  } catch (err) {
    console.error("FETCH ERROR:", err);
    message.textContent = "Fikk ikke kontakt med serveren.";
  }
});
