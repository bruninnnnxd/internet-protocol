const subtitle = document.getElementById("subtitle");
const audio = document.getElementById("voice");

fetch("https://api.ipify.org?format=json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const text = `${data.ip} ? lol`;
    let i = 0;

    subtitle.textContent = "";

    const interval = setInterval(() => {
      subtitle.textContent += text[i];
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 100);
  })
  .catch(function (error) {
    subtitle.textContent = "XD";
    console.error(error);
  });
