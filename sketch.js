// make different sprites by using differnt sized images and scaling them to 70 px kay?
var playing = false
var coins = 0;
var health = 10;
var scroller = true;
var f;
var l;
var l2 = 1;
var l1 = 1;
var player;
var img;
var ulook;
var make = false
var img;
var swap;
var data = "11" +
  "2ggggggggggggggggggggggg2" +
  "3----------------------f3" +
  "4----------------------f4" +
  "5----------------------g5" +
  "6---------------------gd6" +
  "7-------ggggggggggggggdd7" +
  "8------gdddddddddddddddd8" +
  "9ggggggddddddddddddddddd9"
var loops = 1;
var level = 1;
var loader = false

function setup() {
  createCanvas(400, 400)
  frameRate(30)
  scroll = createGroup();
  ulook = createSprite(200, 200, 400, 400)
  ulook.visible=false
  player = createSprite(50, 300, 50, 50)
  img = loadImage("player.png")
  player.addImage(img)
  swap = createSprite(-190, 200, 40, 400)
  swap.visible = false
  img=loadImage("scroll.png")
  swap.addImage(img)
  scroll.add(swap)
  f = data.indexOf("1")
  l = data.lastIndexOf("1");
  while (l2 < 10) {
    while (loops < l) {
      if (data[loops] == "g") {
        swap = createSprite(l1 * 35, l2 * 38, 50)
        img = loadImage("ground.png")
        swap.addImage(img)
        scroll.add(swap)
      }
      if (data[loops] == "d") {
        swap = createSprite(l1 * 35, l2 * 38, 50)
        img = loadImage("dirt.png")
        swap.addImage(img)
        swap.scale = 20
        scroll.add(swap)
      }
      if (data[loops] == "c") {
        swap = createSprite(l1 * 35, l2 * 38, 50)
        img = loadImage("coin.png")
        swap.addImage(img)
        swap.scale = 2;
        scroll.add(swap)
      }
      if (data[loops] == "l") {
        swap = createSprite(l1 * 35, l2 * 38, 50)
        img = loadImage("lava.png")
        swap.addImage(img)
        swap.scale = 10;
        scroll.add(swap)
      }
      if (data[loops] == "e") {
        swap = createSprite(l1 * 35, l2 * 38, 50)
        img = loadImage("grassblock.png")
        swap.addImage(img)
        swap.scale = 1.09375;
        scroll.add(swap)
      }
      if (data[loops] == "f") {
        swap = createSprite(l1 * 35, l2 * 38, 50)
        img = loadImage("goalblock.png")
        swap.addImage(img)
        swap.scale = 1.1;
        scroll.add(swap)
      }
      loops++;
      l1++;
    }
    l1 = 0
    loops = loops + l1 + 1;
    l2++;
    f = data.indexOf(l2)
    l = data.lastIndexOf(l2);
  }
}

function draw() {
  if (playing == true) {
    if (scroller == true) {
      if (player.x < 50) {
        player.x = player.x + 3
      }
      if (player.x > 100) {
        player.x = player.x - 3
      }
    }
    player.velocityX = 0;
    scroll.setVelocityXEach(0)
    if (scroller == true) {
      if (keyDown("a")) {
        player.x = player.x - 3
        if (player.isTouching(scroll)) {
          scroll.setVelocityXEach(0)
        } else {
          scroll.setVelocityXEach(6)
        }
      }
      if (keyDown("d")) {
        player.x = player.x + 3
        if (player.isTouching(scroll)) {
          scroll.setVelocityXEach(0)
        } else {
          scroll.setVelocityXEach(-6)
        }
      }
    } else {
      if (keyDown("d")) {
        player.x = player.x + 5;
      }
      if (keyDown("a")) {
        player.x = player.x - 5;
      }
    }
    if (keyDown("w")) {
      if (player.isTouching(scroll)) {
        player.bounciness = 2;
      }
    }
    player.velocityY = player.velocityY + 1
    if (player.isTouching(scroll)) {} else {
      player.bounciness = 1;
    }
    if (player.velocityY > 6) {
      player.velocityY = 6
    }
    player.bounceOff(scroll, imgfind)
    background("teal");
    fill(0, 0, 0)
    drawSprites();
    textSize(20)
    text("Health:" + health + " Coins:" + coins, 50, 50)
    if (health < 1) {
      playing = false
    }
    scroll.isTouching(ulook,scrolltest)
    scroll.setVisibleEach(false)
ulook.overlap(scroll,scrolltest)
ulook.x=200;
ulook.y=200
  ulook.visible=false;
  } else {
    background("blue");
    textSize(30)
    textAlign(CENTER)
    fill(0, 0, 0)
    text("Super Platformer Maker", 200, 50)
    textSize(20)
    text("Press p to play the 3 test levels", 200, 200)
    text("To play custom levels press m", 200, 250)
    health = 10;
    player.destroy();
    player = createSprite(50, 300, 50, 50)
    img = loadImage("player.png")
    player.addImage(img)
    if (keyDown("p")) {
      playing = true;
    }
    if (keyDown("m")) {
      f = "";
      l = "";
      l2 = 1;
      l1 = 2
      loops = 1;
      data = window.prompt("Level code")
      f = data.indexOf("1")
      l = data.lastIndexOf("1");
      scroll.destroyEach()
      make = true;
        swap = createSprite(-200, 200, 40, 400)
  swap.visible = false
  img=loadImage("scroll.png")
  swap.addImage(img)
  scroll.add(swap);
      while (l2 < 10) {
        while (loops < l) {
          if (data[loops] == "g") {
            swap = createSprite(l1 * 35, l2 * 38, 50)
            img = loadImage("ground.png")
            swap.addImage(img)
            scroll.add(swap)
          }
          if (data[loops] == "d") {
            swap = createSprite(l1 * 35, l2 * 38, 50)
            img = loadImage("dirt.png")
            swap.addImage(img)
            swap.scale = 20
            scroll.add(swap)
          }
          if (data[loops] == "c") {
            swap = createSprite(l1 * 35, l2 * 38, 50)
            img = loadImage("coin.png")
            swap.addImage(img)
            swap.scale = 2;
            scroll.add(swap)
          }
          if (data[loops] == "l") {
            swap = createSprite(l1 * 35, l2 * 38, 50)
            img = loadImage("lava.png")
            swap.addImage(img)
            swap.scale = 10;
            scroll.add(swap)
          }
          if (data[loops] == "e") {
            swap = createSprite(l1 * 35, l2 * 38, 50)
            img = loadImage("grassblock.png")
            swap.addImage(img)
            swap.scale = 1.09375;
            scroll.add(swap)
          }
          if (data[loops] == "f") {
            swap = createSprite(l1 * 35, l2 * 38, 50)
            img = loadImage("goalblock.png")
            swap.addImage(img)
            swap.scale = 1.1;
            scroll.add(swap)
          }
          loops++;
          l1++;
        }
        l1 = 0
        loops = loops + l1 + 1;
        l2++;
        f = data.indexOf(l2)
        l = data.lastIndexOf(l2)
        scroll.setVelocityXEach(-100);
      }
      playing = true;
    }
  }
}
function imgfind(player, scroll) {
  let s = scroll.scale
  if (s == 10) {
    health = health - 1;
    player.velocityY = -10
  }
  if (s == 2) {
    coins++;
    scroll.destroy();
  }
  if (s == 1.1) {
    level++;
    loader = true;
    load();
  }
  fill(0, 0, 0);
}

function load() {
  coin = 0;
  player.destroy();
  if (level == 2) {
    player = createSprite(50, 250, 50, 50)
  }
  if (level == 3) {
    player = createSprite(50, 50, 50, 50)
  }
  img = loadImage("player.png")
  player.addImage(img)
  f = "";
  l = "";
  l2 = 1;
  l1 = 1;
  loops = 1
  scroll.destroyEach();
  swap.destroy();
  swap = createSprite(-190, 200, 40, 400)
  swap.visible = false
  img = loadImage("scroll.png")
  swap.addImage(img)
  scroll.add(swap)
  if (make == false) {
    if (level == 2) {
      data = "1gggggggggggggggggggggggggggggggggggggggggggggggg1" +
        "2d----------------------cccccccccc-------------fd2" +
        "3d----------------------cccccccccc----c--------fd3" +
        "4d----------------------cccccccccc-------------fd4" +
        "5d---------------------ggggggggggg---ggg----ggggd5" +
        "6d------g---g---------gddddddddddd---------gddddd6" +
        "7d-----gd---dg-------gdddddddddddd--------gdddddd7" +
        "8d----gddlllddg-----gdddddddddddddlllllllgddddddd8" +
        "9dggggdddddddddgggggddddddddddddddddddddddddddddd9"
    }
    if (level == 3) {
      data = "1------------------------------------f1" +
        "2------------------------------------f2" +
        "3------------------------------------f3" +
        "4gggggg----ggggggggg---gggg----------f4" +
        "5d-------------ccc----gddddg---------f5" +
        "6d-------------ccc--ggddddddg--------f6" +
        "7d-------------gggggdddddddddg-------f7" +
        "8dlllllgggglllldddddddddddddddg------f8" +
        "9dlllllddddllllddddddddddddddddggggggg9"
    }
    if (level == 4) {
      playing = false;
      window.alert("You won!");
      data = "";
    }
    f = data.indexOf("1")
    l = data.lastIndexOf("1");
    while (l2 < 10) {
      while (loops < l) {
        if (data[loops] == "g") {
          swap = createSprite(l1 * 35, l2 * 38, 50)
          img = loadImage("ground.png")
          swap.addImage(img)
          scroll.add(swap)
        }
        if (data[loops] == "d") {
          swap = createSprite(l1 * 35, l2 * 38, 50)
          img = loadImage("dirt.png")
          swap.addImage(img)
          swap.scale = 20
          scroll.add(swap)
        }
        if (data[loops] == "c") {
          swap = createSprite(l1 * 35, l2 * 38, 50)
          img = loadImage("coin.png")
          swap.addImage(img)
          swap.scale = 2;
          scroll.add(swap)
        }
        if (data[loops] == "l") {
          swap = createSprite(l1 * 35, l2 * 38, 50)
          img = loadImage("lava.png")
          swap.addImage(img)
          swap.scale = 10;
          scroll.add(swap)
        }
        if (data[loops] == "e") {
          swap = createSprite(l1 * 35, l2 * 38, 50)
          img = loadImage("grassblock.png")
          swap.addImage(img)
          swap.scale = 1.09375;
          scroll.add(swap)
        }
        if (data[loops] == "f") {
          swap = createSprite(l1 * 35, l2 * 38, 50)
          img = loadImage("goalblock.png")
          swap.addImage(img)
          swap.scale = 1.1;
          scroll.add(swap)
        }
        loops++;
        l1++;
      }
      l1 = 0
      loops = loops + l1 + 1;
      l2++;
      f = data.indexOf(l2)
      l = data.lastIndexOf(l2);
    }
    playing = true;
  } else {
    playing = false
  }
}
function scrolltest(ulook,scroll){
scroll.visible=true;}