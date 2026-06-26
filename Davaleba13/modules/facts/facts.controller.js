export const factsController = {
  async getRandomFact(req, res) {
    const response = await fetch("https://catfact.ninja/fact");

    const data = await response.json();

    res.json({ fact: data.fact });
  },
};
