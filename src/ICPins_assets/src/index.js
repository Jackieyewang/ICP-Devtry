import { ICPins } from "../../declarations/ICPins";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with ICPins actor, calling the greet method
  const greeting = await ICPins.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
