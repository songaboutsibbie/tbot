function fn_writeBuyOrder(message) {
  console.log("writing to file");
  fs.appendFile('./data/buyOrder.txt', 'message', function (err) {
  	if (err) throw err;
  });
}

module.exports = { fn_writeToFile } ;


