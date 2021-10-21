const root = (req, res) => {
  res.end("Home page is coming!");
};

const text = (req, res) => {
  const param = req.params.param || "Node";
  res.end(`Hello ${param} server!`);
};

const html = (req, res) => {
  const param = req.params.param || "Node";
  res.end(`<h1>Hello ${param} server!</h1>`);
};

module.exports = { root, text, html };

//export default { root, text, html };
