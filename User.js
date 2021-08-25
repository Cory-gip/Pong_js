class User {

  constructor(x, y, width, height, score, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.score = score;
    this.color = color;
  }

  drawPaddle(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }
}
