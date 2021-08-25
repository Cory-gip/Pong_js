class Net {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  drawNet() {
    for (let i = 0; i <= canvas.height; i += 15) {
      drawScreen(net.x, net.y + i, net.width, net.height, net.color);
    }
  }
}
