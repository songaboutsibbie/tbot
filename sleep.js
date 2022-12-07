function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


module.exports = { fn_sleep } ;
