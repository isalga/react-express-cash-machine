const makeChange = (total) => {
  let availableNotes = [100, 50, 20, 10];
  const change = [];

  for (let i = 0; i < availableNotes.length; i++) {
    const currentNote = availableNotes[i];
    const requiredNotes = parseInt(total / currentNote);
    if (requiredNotes > 0) {
      change.push(`${requiredNotes} x ${currentNote}`);      
    }
    total = total % currentNote;
  }

  return change;
};

module.exports = {
  makeChange: makeChange
}
