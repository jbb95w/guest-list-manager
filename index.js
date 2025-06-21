// src/index.js

const form = document.getElementById("guest-form");
const input = document.getElementById("guest-name");
const guestList = document.getElementById("guest-list");

let guests = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = input.value.trim();
  if (!name) return;

  if (guests.length >= 10) {
    alert("Guest list is full! (Max 10)");
    return;
  }

  addGuest(name);
  input.value = ""; // Clear input
});

function addGuest(name) {
  const li = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  const rsvpBtn = document.createElement("button");
  rsvpBtn.textContent = "Attending";
  rsvpBtn.addEventListener("click", () => {
    rsvpBtn.textContent =
      rsvpBtn.textContent === "Attending" ? "Not Attending" : "Attending";
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    guestList.removeChild(li);
    guests = guests.filter((g) => g !== name);
  });

  li.appendChild(nameSpan);
  li.appendChild(rsvpBtn);
  li.appendChild(removeBtn);
  guestList.appendChild(li);

  guests.push(name);
}
