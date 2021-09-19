function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }
  
function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        let maxAttempts = 100;

        while (headsCount < 5 && attempts <= maxAttempts) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
        }
        if (attempts <= maxAttempts) {
        resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
        reject(`Attempts have exceeded ${maxAttempts} flips.`);
        }
    });
}
  
  fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  
  console.log("This is happening after the async function");