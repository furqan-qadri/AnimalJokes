getJoke()
async function getJoke() {
  const jokeText = document.getElementById("main_paragraph");
  const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      const joke = data.setup;
      const jokePunch= data.punchline

      jokeText.innerHTML = joke + " "+ jokePunch;
}