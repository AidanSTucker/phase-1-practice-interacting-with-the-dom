document.addEventListener("DOMContentLoaded", () => {
  // Counter
  const counterElement = document.getElementById("counter");
  let counterValue = 0;
  let timerInterval;

  // Buttons
  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");
  const heartButton = document.getElementById("heart");
  const pauseButton = document.getElementById("pause");

  // Likes
  const likesList = document.querySelector(".likes");

  // Comments
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("list");

  // Timer
  function startTimer() {
    timerInterval = setInterval(() => {
      counterValue++;
      counterElement.textContent = counterValue;
    }, 1000);
  }

  startTimer();

  // Button Events
  minusButton.addEventListener("click", () => {
    counterValue--;
    counterElement.textContent = counterValue;
  });

  plusButton.addEventListener("click", () => {
    counterValue++;
    counterElement.textContent = counterValue;
  });

  heartButton.addEventListener("click", () => {
    const existingLike = document.getElementById(`like-${counterValue}`);
    if (existingLike) {
      const likeCountSpan = existingLike.querySelector(".like-count");
      const likeCount = parseInt(likeCountSpan.textContent);
      likeCountSpan.textContent = likeCount + 1;
    } else {
      const likeItem = document.createElement("li");
      likeItem.setAttribute("id", `like-${counterValue}`);
      likeItem.innerHTML = `${counterValue} has been liked <span class="like-count">1</span> time`;
      likesList.appendChild(likeItem);
    }
  });

  pauseButton.addEventListener("click", () => {
    if (pauseButton.textContent === "pause") {
      clearInterval(timerInterval);
      minusButton.disabled = true;
      plusButton.disabled = true;
      heartButton.disabled = true;
      pauseButton.textContent = "resume";
    } else {
      startTimer();
      minusButton.disabled = false;
      plusButton.disabled = false;
      heartButton.disabled = false;
      pauseButton.textContent = "pause";
    }
  });

  // Comment Form
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentText = commentInput.value;
    const commentItem = document.createElement("p");
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);
    commentInput.value = "";
  });
});
