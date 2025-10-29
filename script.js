let current = 0;
let score = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  // 表示処理（DOM操作）
}

function checkAnswer(choice) {
  if (choice === questions[current].answer) {
    score++;
  }
  current++;
  if (current < 20) {
    showQuestion();
  } else {
    alert(`正答率：${Math.round(score / 20 * 100)}%`);
  }
}

document.getElementById("startBtn").addEventListener("click", startQuiz);
