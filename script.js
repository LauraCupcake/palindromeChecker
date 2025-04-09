const userInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input;

  if(input === ""){
    alert("Please input a value");
    return;
  }

  //remove the previous result
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMessage = `${originalInput} ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? "is" : "is not"} a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerText = resultMessage;
  resultDiv.appendChild(pTag);

  //show the result
  resultDiv.classList.remove('hidden');
};

checkBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value='';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
