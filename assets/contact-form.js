(() => {
  const forms = document.querySelectorAll("[data-contact-form]");
  const copyButtons = document.querySelectorAll("[data-copy-email]");

  const buildMailto = (form) => {
    const email = form.dataset.mailto || "boucher.kilian.pro@gmail.com";
    const data = new FormData(form);
    const activity = (data.get("activity") || "").toString().trim();
    const subjectBase = activity
      ? `Demande de site vitrine - ${activity}`
      : "Demande de site vitrine";

    const bodyLines = [
      `Nom : ${(data.get("name") || "").toString().trim()}`,
      `Activite : ${activity}`,
      `Email : ${(data.get("email") || "").toString().trim()}`,
      `Source : ${(data.get("source_page") || window.location.pathname).toString().trim()}`,
      "",
      "Besoin :",
      (data.get("need") || "").toString().trim(),
    ];

    return `mailto:${email}?subject=${encodeURIComponent(subjectBase)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const setStatus = (statusNode, message, tone) => {
    if (!statusNode) {
      return;
    }

    statusNode.textContent = message;
    statusNode.dataset.tone = tone;
  };

  const url = new URL(window.location.href);
  const sentFromRedirect = url.searchParams.get("sent") === "1";

  forms.forEach((form) => {
    const submitButton = form.querySelector('button[type="submit"]');
    const statusNode = form.querySelector("[data-form-status]");
    const defaultLabel = submitButton ? submitButton.textContent : "";

    if (sentFromRedirect) {
      setStatus(
        statusNode,
        form.dataset.successMessage ||
          "Merci, la demande a bien ete envoyee. Le studio reviendra vers vous rapidement.",
        "success"
      );
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const formData = new FormData(form);
      const action = form.getAttribute("action");

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Envoi...";
      }

      setStatus(statusNode, "Envoi en cours...", "info");

      try {
        const response = await fetch(action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("network");
        }

        form.reset();
        setStatus(
          statusNode,
          form.dataset.successMessage ||
            "Merci, la demande a bien ete envoyee. Le studio reviendra vers vous rapidement.",
          "success"
        );
      } catch (error) {
        setStatus(
          statusNode,
          "Le formulaire n'a pas pu partir automatiquement. Votre messagerie va s'ouvrir pour finaliser l'envoi.",
          "warning"
        );
        window.location.href = buildMailto(form);
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = defaultLabel;
        }
      }
    });
  });

  copyButtons.forEach((button) => {
    const defaultLabel = button.textContent;
    const statusNodeId = button.getAttribute("aria-describedby");
    const statusNode = statusNodeId
      ? document.getElementById(statusNodeId)
      : document.querySelector("[data-copy-status]");

    button.addEventListener("click", async () => {
      const value = button.dataset.copyValue || "";

      if (!value) {
        return;
      }

      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "E-mail copie";
        setStatus(statusNode, "Adresse copiee. Vous pouvez la coller ou envoyer un message quand vous voulez.", "success");
      } catch (error) {
        setStatus(statusNode, "La copie automatique n'est pas disponible ici. Votre messagerie va s'ouvrir.", "warning");
        window.location.href = `mailto:${value}`;
        return;
      }

      window.setTimeout(() => {
        button.textContent = defaultLabel;
      }, 2200);
    });
  });
})();
