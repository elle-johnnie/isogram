const isIsogram = function isIsogram(text) {
  const test = text.toUpperCase();
  // regex what?! it works! check text for letter duplicates only
  const pattern = /\w/;
  // place to store letters when iterated
  const checkerObj = {};
  // iterate through test string
  for (const letter of test) {
    // create checker k,v if thing is a letter
    if (pattern.test(letter)) {
      // if checkerObj contains the letter then kick out FALSE
      if (checkerObj[`${letter}`] === "seat's taken!") {
        return false;
      }
      // if not then let it in to the checkerobj
      checkerObj[`${letter}`] = "seat's taken!";
    }
    // log that fool to the console for debuggin'
    console.log(checkerObj);
  }

  return true;
};

// const p = isIsogram('isogram');
// console.log(p);
export default isIsogram;
