const response = (res, status, result, err) => {
  const resultPrint = {}
  resultPrint.status = 'success'
  resultPrint.statusCode = status
  resultPrint.data = result
  resultPrint.err = err
  return res.status(resultPrint.statusCode).json(resultPrint)
}

module.exports = {
  response
}