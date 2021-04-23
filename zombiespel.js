<script src="https://koda.nu/simple.js">
  
 
  var spelare = {x: 100, y: 100, speed: 10} /* Spelaren, dess start x och y koordinat samt dess hastighet */
  
  var squidwards = []; /* en lista för alla squidwards */
  
  /* så länge i är mindre än 10 så läggs det till squidwards */
  
  var i = 0; 
  
  while (i < 10) 
  {
  	squidwards.push({x: random(totalWidth), y: random(totalHeight), speed: random(1,5)});
    
    i += 1;
  }
     
  var squidward = {x: random(totalWidth), y: random(totalHeight), speed: random(1,5)}; /* ger alla squidwards varsin random start position samt random hastighet */
  
  function update()
  {
  	clearScreen(); /* Gör så att det som rör sig på skärmen inte stannar kvar */
    
    picture(0,0, "https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png", totalWidth, totalHeight); /* ändrar bakgrunden till windows xps bakgrund */
    
    picture(spelare.x, spelare.y, "http://pngimg.com/uploads/spongebob/small/spongebob_PNG37.png") /* gör så att spelaren ser ut som svampbob */
    
    /* tangenter som gör så att spelaren kan röra på sig */
    
    if (keyboard.d) 
      spelare.x += spelare.speed
    if (keyboard.a)
      spelare.x -= spelare.speed
    if (keyboard.w)
      spelare.y -= spelare.speed
    if (keyboard.s)
      spelare.y += spelare.speed
      
 	/* Gör så att om spelaren håller in mellanslag så ökas deras hastighet */
      
    if (keyboard.space)
      spelare.speed = 30
    else
      spelare.speed = 10
    
    var i = 0;
    
    while (i < 10)
    {
      var squidward = squidwards[i];
    	picture(squidward.x, squidward.y, "https://hosting.photobucket.com/albums/k256/appelicious5/squidward.gif?width=450&height=278&fit=bounds&crop=fill") /* gör så att alla squidwards ser ut som squidward */
  
        /* går så att alla squidwards rör sig mot spelaren */
        
  		if (squidward.x < spelare.x)
      	  squidward.x += squidward.speed;
        else
          squidward.x -= squidward.speed;

        if (squidward.y < spelare.y)
          squidward.y += squidward.speed;
        else
          squidward.y -= squidward.speed;
      
      	/* ifall squidwards avstånd från spelaren är mindre än 5 så slutar spelet */

        if (distance(spelare, squidward) < 5)
        {
        alert("Game over");
        stopUpdate();
      }
      
      i += 1;
     }
    }
  

</script>