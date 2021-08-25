class Pong {
  // The render function does all of the drawing.
  static render() {
    // clear the canvas
    drawScreen(0, 0, canvas.width, canvas.height, "#000");

    // draw the user score to the left
    drawText(user.score, canvas.width / 4, canvas.height / 5);

    // draw the COM score to the right
    drawText(com.score, (3 * canvas.width) / 4, canvas.height / 5);

    // draw the net
    net.drawNet();

    // draw the user's paddle
    user.drawPaddle(user.x, user.y, user.width, user.height, user.color);

    // draw the COM's paddle
    com.drawPaddle(com.x, com.y, com.width, com.height, com.color);

    // draw the ball
    ball.drawArc(ball.x, ball.y, ball.radius, ball.color);
  }

  // update function, the function that does all calculations
  static update() {
    ball.update();
    com.update();
    // we check if the paddle hit the user or the com paddle
    let player = ball.x + ball.radius < canvas.width / 2 ? user : com;

    // if the ball hits a paddle
    if (ball.collision(ball, player)) {
      // play sound
      hit.play();
      // we check where the ball hits the paddle
      let collidePoint = ball.y - (player.y + player.height / 2);
      // normalize the value of collidePoint, we need to get numbers between -1 and 1.
      // -player.height/2 < collide Point < player.height/2
      collidePoint = collidePoint / (player.height / 2);

      // when the ball hits the top of a paddle we want the ball, to take a -45degees angle
      // when the ball hits the center of the paddle we want the ball to take a 0degrees angle
      // when the ball hits the bottom of the paddle we want the ball to take a 45degrees
      // Math.PI/4 = 45degrees
      let angleRad = (Math.PI / 4) * collidePoint;

      // change the X and Y velocity direction
      let direction = ball.x + ball.radius < canvas.width / 2 ? 1 : -1;
      ball.velocityX = direction * ball.speed * Math.cos(angleRad);
      ball.velocityY = ball.speed * Math.sin(angleRad);

      // speed up the ball everytime a paddle hits it.
      ball.speed += 0.1;
    }
  }
}
