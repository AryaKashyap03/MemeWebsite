   //contentclearing
   const contentHide=()=>{
    memeimg.style.display = 'none';
    joke.style.display = 'none';
    quote.style.display = 'none';
    riddlequestion.style.display = 'none';
    riddleanswer.style.display = 'none';
   };
      //formeme
      const memeimg = document.createElement("img");
      const beforeElement = document.querySelector(".t3");
      const onebutton = document.querySelector(".btn1");

      const fetchMeme = async () => {
        try {
          const response = await fetch(
            "https://meme-api.com/gimme/programmingmemes"
          ); // API endpoint for programming memes
          const data = await response.json();
          return data.url; // Get the meme URL from the response
        } catch (error) {
          console.error("Error fetching meme:", error);
        }
      };

      // Display meme function
      const displaymeme = async () => {
        contentHide();
        const memeUrl = await fetchMeme(); // Fetch a random meme URL
        if (memeUrl) {
          memeimg.setAttribute("src", memeUrl); // Set the src to the fetched meme
          memeimg.style.display = 'block';
          if (beforeElement) {
            beforeElement.parentNode.insertBefore(memeimg, beforeElement);
          }
        }
      };

      if (onebutton) {
        onebutton.onclick = displaymeme; // Attach click event to the button
      }
      //for joke
      const joke = document.createElement("h3");
      joke.textContent = "This Website!";
      const beforeElement2 = document.querySelector(".t4");
      const displayjoke = () => {
        contentHide();
        joke.style.display='block';
        beforeElement2.parentNode.insertBefore(joke, beforeElement2);
      };
      secondbutton = document.querySelector(".btn2");
      secondbutton.onclick = displayjoke;

      //for quotes
      const quotes = [
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
        "In the middle of every difficulty lies opportunity. – Albert Einstein",
        "The only way out is through. – Robert Frost",
        "Life is what happens when you're busy making other plans. – John Lennon",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "The harder the conflict, the greater the triumph. – George Washington",
        "Pain is inevitable. Suffering is optional. – Haruki Murakami",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
        "You have power over your mind – not outside events. Realize this, and you will find strength. – Marcus Aurelius",
        "It's not the load that breaks you down, it's the way you carry it. – Lou Holtz",
        "Difficulties strengthen the mind, as labor does the body. – Seneca",
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "Every man is born as many men and dies as a single one. – Martin Heidegger",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Success is stumbling from failure to failure with no loss of enthusiasm. – Winston Churchill",
        "Your present circumstances don’t determine where you can go; they merely determine where you start. – Nido Qubein",
        "Do or do not. There is no try. – Yoda",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "Not everything that is faced can be changed, but nothing can be changed until it is faced. – James Baldwin",
        "Life is really simple, but we insist on making it complicated. – Confucius",
        "Be yourself; everyone else is already taken. – Oscar Wilde",
        "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
        "The only thing standing between you and your goal is the story you keep telling yourself. – Jordan Belfort",
        "In the end, we only regret the chances we didn’t take. – Lewis Carroll",
        "The best way out is always through. – Robert Frost",
        "Turn your wounds into wisdom. – Oprah Winfrey",
        "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
        "You cannot change what you are, only what you do. – Philip Pullman",
        "A year from now you may wish you had started today. – Karen Lamb",
        "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
        "We must embrace pain and burn it as fuel for our journey. – Kenji Miyazawa",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
        "If you're going through hell, keep going. – Winston Churchill",
        "Everything you’ve ever wanted is on the other side of fear. – George Addair",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
        "Courage doesn’t always roar, sometimes it’s the quiet voice at the end of the day whispering ‘I will try again tomorrow.’ – Mary Anne Radmacher",
        "Happiness is not by chance, but by choice. – Jim Rohn",
        "Don’t wait. The time will never be just right. – Napoleon Hill",
        "Life is not about waiting for the storm to pass but learning to dance in the rain. – Vivian Greene",
        "Do what you can, with what you have, where you are. – Theodore Roosevelt",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "The journey of a thousand miles begins with one step. – Lao Tzu",
        "Dream big and dare to fail. – Norman Vaughan",
        "I am not a product of my circumstances. I am a product of my decisions. – Stephen R. Covey",
        "The man who moves a mountain begins by carrying away small stones. – Confucius",
        "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
        "You have to do the hard things. The things that no one else is doing. – Mel Robbins",
        "You must be the change you wish to see in the world. – Mahatma Gandhi",
        "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
        "Our greatest glory is not in never falling, but in rising every time we fall. – Confucius",
        "Sometimes even to live is an act of courage. – Seneca",
        "A person who never made a mistake never tried anything new. – Albert Einstein",
        "What consumes your mind controls your life. – Anonymous",
        "We must be willing to let go of the life we planned to have the life that is waiting for us. – Joseph Campbell",
        "Happiness depends upon ourselves. – Aristotle",
        "Life begins at the end of your comfort zone. – Neale Donald Walsch",
        "Do not let what you cannot do interfere with what you can do. – John Wooden",
        "Life is a series of natural and spontaneous changes. Don’t resist them – that only creates sorrow. – Lao Tzu",
        "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
        "The best revenge is massive success. – Frank Sinatra",
        "The purpose of life is not to be happy. It is to be useful. – Ralph Waldo Emerson",
        "It’s not what happens to you, but how you react to it that matters. – Epictetus",
        "The only journey is the one within. – Rainer Maria Rilke",
        "Life is short, and it is up to you to make it sweet. – Sarah Louise Delany",
        "Fall seven times, stand up eight. – Japanese Proverb",
        "I would rather die of passion than of boredom. – Vincent Van Gogh",
        "What you do speaks so loudly that I cannot hear what you say. – Ralph Waldo Emerson",
        "Action may not always bring happiness, but there is no happiness without action. – Benjamin Disraeli",
        "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily. – Zig Ziglar",
        "Experience is simply the name we give our mistakes. – Oscar Wilde",
        "Don’t raise your voice, improve your argument. – Desmond Tutu",
        "It is not length of life, but depth of life. – Ralph Waldo Emerson",
        "An unexamined life is not worth living. – Socrates",
        "All life is an experiment. The more experiments you make the better. – Ralph Waldo Emerson",
        "Everything you can imagine is real. – Pablo Picasso",
        "If you want to live a happy life, tie it to a goal, not to people or things. – Albert Einstein",
        "Life is like a book. Some chapters are sad, some are happy, and some are exciting. But if you never turn the page, you will never know what the next chapter holds. – Anonymous",
        "Success is how high you bounce when you hit bottom. – George S. Patton",
        "You can't use up creativity. The more you use, the more you have. – Maya Angelou",
        "If you’re not failing, you’re not even trying. – Denzel Washington",
        "Be curious, not judgmental. – Walt Whitman",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "First, solve the problem. Then, write the code. – John Johnson",
        "I don’t need to 'get a life.' I’m a gamer. I have lots of lives. – Anonymous",
        "There are only two kinds of languages: the ones people complain about and the ones nobody uses. – Bjarne Stroustrup",
        "In order to be irreplaceable, one must always be different. – Coco Chanel",
        "The most complicated skill is to be simple. – Dejan Stojanovic",
      ];

      const buttonthree = document.querySelector(".btn3");
      const beforeElement3 = document.querySelector(".t5");
      const quote = document.createElement("h3");
      const displayquote = () => {
        contentHide();
        quote.style.display='block';
        const num = Math.floor(Math.random() * quotes.length);
        quote.textContent = quotes[num];
        beforeElement3.parentNode.insertBefore(quote, beforeElement3);
      };
      buttonthree.onclick = displayquote;

      //riddles
      const riddles = [
        { question: "What has keys but can't open locks?", answer: "A piano." },
        {
          question: "What has to be broken before you can use it?",
          answer: "An egg.",
        },
        {
          question:
            "I’m tall when I’m young, and I’m short when I’m old. What am I?",
          answer: "A candle.",
        },
        {
          question: "What is full of holes but still holds water?",
          answer: "A sponge.",
        },
        {
          question: "What begins with T, ends with T, and has T in it?",
          answer: "A teapot.",
        },
        { question: "What has hands but can’t clap?", answer: "A clock." },
        {
          question: "What has a heart that doesn’t beat?",
          answer: "An artichoke.",
        },
        {
          question: "What is so fragile that saying its name breaks it?",
          answer: "Silence.",
        },
        {
          question:
            "I have branches, but no fruit, trunk, or leaves. What am I?",
          answer: "A bank.",
        },
        {
          question:
            "What can travel around the world while staying in a corner?",
          answer: "A stamp.",
        },

        { question: "What gets wetter as it dries?", answer: "A towel." },
        { question: "What has one eye but can't see?", answer: "A needle." },
        { question: "What can you catch but not throw?", answer: "A cold." },
        {
          question: "What is always in front of you but can’t be seen?",
          answer: "The future.",
        },
        {
          question:
            "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
          answer: "An echo.",
        },
        {
          question: "What can you keep after giving to someone?",
          answer: "Your word.",
        },
        { question: "What has a neck but no head?", answer: "A bottle." },
        {
          question:
            "What has cities, but no houses; forests, but no trees; and rivers, but no water?",
          answer: "A map.",
        },
        {
          question: "What begins with an E but only contains one letter?",
          answer: "An envelope.",
        },
        {
          question: "What can fill a room but takes up no space?",
          answer: "Light.",
        },

        {
          question: "What is always coming but never arrives?",
          answer: "Tomorrow.",
        },
        { question: "What has legs but doesn't walk?", answer: "A table." },
        {
          question:
            "What can run but never walks, has a mouth but never talks?",
          answer: "A river.",
        },
        {
          question: "What is easy to get into but hard to get out of?",
          answer: "Trouble.",
        },
        { question: "What has an eye but cannot see?", answer: "A potato." },
        {
          question: "What has four fingers and a thumb, but is not alive?",
          answer: "A glove.",
        },
        {
          question: "What can be broken but never held?",
          answer: "A promise.",
        },
        { question: "What has many teeth but cannot bite?", answer: "A comb." },
        {
          question: "What runs around the yard without moving?",
          answer: "A fence.",
        },
        {
          question: "What has a thumb and four fingers, but is not alive?",
          answer: "A glove.",
        },

        {
          question:
            "What begins with P and ends with E and has thousands of letters?",
          answer: "Post office.",
        },
        { question: "What has words but never speaks?", answer: "A book." },
        {
          question:
            "I have lakes with no water, mountains with no stone, and cities with no buildings. What am I?",
          answer: "A map.",
        },
        {
          question: "What is always in front of you but can’t be seen?",
          answer: "The future.",
        },
        {
          question:
            "I am not alive, but I can grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?",
          answer: "Fire.",
        },
        { question: "What has a bed but never sleeps?", answer: "A river." },
        { question: "What has ears but cannot hear?", answer: "Corn." },
        {
          question: "I can be cracked, made, told, and played. What am I?",
          answer: "A joke.",
        },
        {
          question: "What has a face and two hands but no arms or legs?",
          answer: "A clock.",
        },
        {
          question: "What is black when it’s clean and white when it’s dirty?",
          answer: "A chalkboard.",
        },

        {
          question:
            "I am taken from a mine, and shut up in a wooden case, from which I am never released. What am I?",
          answer: "Pencil lead.",
        },
        {
          question: "What has a head, a tail, is brown, and has no legs?",
          answer: "A penny.",
        },
        { question: "What has words, but never speaks?", answer: "A book." },
        { question: "What has teeth but cannot bite?", answer: "A comb." },
        { question: "What goes up but never comes down?", answer: "Your age." },
        {
          question:
            "I have keys but open no locks. I have space but no room. You can enter, but you can’t go outside. What am I?",
          answer: "A keyboard.",
        },
        {
          question: "What gets bigger the more you take away?",
          answer: "A hole.",
        },
        {
          question:
            "What is light as a feather, yet the strongest man can't hold it for long?",
          answer: "His breath.",
        },
        {
          question: "What is so light that it can’t even be seen?",
          answer: "A whisper.",
        },
        {
          question:
            "I fly without wings, I cry without eyes. Whenever I go, darkness flies. What am I?",
          answer: "Clouds.",
        },

        {
          question:
            "What can you hold in your left hand but not in your right?",
          answer: "Your right elbow.",
        },
        {
          question: "What has a head, a tail, but does not have a body?",
          answer: "A coin.",
        },
        {
          question: "What is at the end of a rainbow?",
          answer: "The letter W.",
        },
        { question: "What has a spine but no bones?", answer: "A book." },
        {
          question:
            "What can you break, even if you never pick it up or touch it?",
          answer: "A promise.",
        },
      ];
      const buttonfour = document.querySelector(".btn4");
      const buttonfive = document.querySelector(".btn5");
      const referenceNode = document.querySelector(".t5");
      const riddlequestion = document.createElement("h3");
      const riddleanswer = document.createElement("h3");
      let clickedvalue = false;
      let answerDisplayed = false;

      buttonfour.onclick = () => {
        contentHide();
        const randindex = Math.floor(Math.random() * riddles.length);
        riddlequestion.textContent = riddles[randindex].question;
        riddlequestion.style.display='block';
        referenceNode.parentNode.insertBefore(
          riddlequestion,
          referenceNode.nextSibling
        );
        if (answerDisplayed) {
          riddleanswer.parentNode.removeChild(riddleanswer);
          answerDisplayed = false;
        }
        buttonfive.onclick = () => {
          if (!answerDisplayed) {
            answerDisplayed = true;
            riddleanswer.textContent = riddles[randindex].answer;
            riddleanswer.style.display='block';
            riddlequestion.parentNode.insertBefore(
              riddleanswer,
              riddlequestion.nextSibling
            );
          }
        };
      };