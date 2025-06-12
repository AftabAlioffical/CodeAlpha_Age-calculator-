
document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const dob = new Date(document.getElementById('dob').value);
  const today = new Date();

  if (dob > today) {
    document.getElementById('result').textContent = "Please enter a valid date of birth.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('result').textContent = 
    `You are ${years} years, ${months} months, and ${days} days old.`;
});
