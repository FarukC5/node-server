const log = (req, res, next) => {
  console.log(req.url);
  next();
};

const checkSize = (req, res, next) => {
  if (req.params.param.length > 6) {
    return res.status(403).send("403 (forbidden)");
  }
  next();
};

module.exports = { log, checkSize };

//export default { log, checkSize };     
