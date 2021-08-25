class Ball {

  constructor(x, y, radius, velocityX, velocityY, speed, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.speed = speed;
    this.color = color;
  }

  drawArc(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }

  // when COM or USER scores, we reset the ball
  resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.velocityX = -ball.velocityX;
    ball.speed = 7;
  }

  collision(b, p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    return (
      p.left < b.right &&
      p.top < b.bottom &&
      p.right > b.left &&
      p.bottom > b.top
    );
  }

  update() {
    if (ball.x - ball.radius < 0) {
      com.score++;
      comScore.play();
      ball.resetBall();
    } else if (ball.x + ball.radius > canvas.width) {
      user.score++;
      userScore.play();
      ball.resetBall();
    }

    // the ball has a velocity
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
      ball.velocityY = -ball.velocityY;
      wall.play();
    }
  }
}
