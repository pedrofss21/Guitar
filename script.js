let activeTab = "roadmap";

const phases = [
  {
    name: "FASE 1",
    weeks: [
      {
        title: "Nota Raiz",
        focus: ["Identificar tom", "Memorizar cordas"],
        metric: "5 min para identificar"
      }
    ]
  },
  {
    name: "FASE 2",
    weeks: [
      {
        title: "CAGED",
        focus: ["3 posições", "Improvisar"],
        metric: "Sem hesitar"
      }
    ]
  }
];

const schedule = [
  {
    day: "SEG",
    focus: "Treinamento Auditivo",
    tasks: ["Intervalos", "Identificar tom"]
  },
  {
    day: "TER",
    focus: "Harmonia",
    tasks: ["Escalas", "Progressões"]
  }
];

function setTab(tab) {
  activeTab = tab;
  document.querySelectorAll(".tabs button").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
  render();
}

function render() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  if (activeTab === "roadmap") {
    phases.forEach(phase => {
      phase.weeks.forEach(week => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<strong>${week.title}</strong>`;

        card.onclick = () => {
          const details = document.createElement("div");
          details.className = "details";
          details.innerHTML = `
            ${week.focus.map(f => `• ${f}`).join("<br>")}
            <br><br><i>${week.metric}</i>
          `;
          card.appendChild(details);
        };

        content.appendChild(card);
      });
    });
  }

  if (activeTab === "schedule") {
    schedule.forEach(day => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<strong>${day.day} - ${day.focus}</strong>`;

      card.onclick = () => {
        const details = document.createElement("div");
        details.className = "details";
        details.innerHTML = day.tasks.map(t => `• ${t}`).join("<br>");
        card.appendChild(details);
      };

      content.appendChild(card);
    });
  }
}

render();

// PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}