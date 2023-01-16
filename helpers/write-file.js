function fn_writeBuyOrder(crypto) {
  const fs = require('fs');
  
  console.log("writing to file");
  message = crypto + ",";
  fs.appendFile('./data/buyOrder.txt', message, function (err) {
  	if (err) throw err;
  });
}

function fn_writeShortOrder(crypto) {
  const fs = require('fs');
  
  console.log("writing to file");
  message = crypto + ",";
  fs.appendFile('./data/shortOrder.txt', message, function (err) {
    if (err) throw err;
  });
}


module.exports = { fn_writeBuyOrder, fn_writeShortOrder } ;  