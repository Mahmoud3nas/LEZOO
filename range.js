module.exports = (req, res, next) => {
  res.header('Content-Range', 'posts 0-200/200')
  next()
}
