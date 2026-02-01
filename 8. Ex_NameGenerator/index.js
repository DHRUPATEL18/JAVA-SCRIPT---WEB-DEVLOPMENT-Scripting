let adjective = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
  };
  
  let shop = {
    1: "Engine",
    2: "Food",
    3: "Garment",
  };
  
  let word = {
    1: "Bros",
    2: "Limited",
    3: "Hub",
  };

  let first = adjective[Math.floor(Math.random() * 3) + 1];
  let second = shop[Math.floor(Math.random() * 3) + 1];
  let third = word[Math.floor(Math.random() * 3) + 1];
  
  console.log(first, second, third);
  