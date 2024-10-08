# Raw: LAB1.1
# [Xem trên GitHub](https://github.com/dinhkarate/IE104).
![image](https://github.com/user-attachments/assets/39f8ba9a-1553-4960-9655-2b96f68dd71d)
## Bước 1. Khối và cấu trúc nội dung
```
<!-- MSSV: 22520252 -->
<!-- Ho va ten: Pham Quang Dinh -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>University Application Response</title>
    <style>
        body {
            max-width: 800px;
            margin: 0 auto;
        }
        .sender-column {
            text-align: right;
        }
        h1 {
            font-size: 1.5em;
        }
        h2 {
            font-size: 1.3em;
        }
        p, ul, ol, dl, address {
            font-size: 1.1em;
        }
        p, li, dd, dt, address {
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <address>
        Dr. Eleanor Gaye<br>
        Awesome Science faculty<br>
        University of Awesome<br>
        Bobtown, CA 99999,<br>
        USA<br>
        Tel: 123-456-7890<br>
        Email: no_reply@example.com<br>
        20 January 2016
    </address>

    <address>
        Miss Eileen Dover<br>
        4321 Cliff Top Edge<br>
        Dover, CT9 XXX<br>
        UK
    </address>

    <h1>Re: Eileen Dover university application</h1>

    <p>Dear Eileen,</p>

    <p>Thank you for your recent application to join us at the University of Awesome's science faculty to study as part of your PhD next year. I will answer your questions one by one, in the following sections.</p>

    <h2>Starting dates</h2>
    <p>We are happy to accommodate you starting your study with us at any time, however it would suit us better if you could start at the beginning of a semester; the start dates for each one are as follows:</p>
    <ul>
        <li>First semester: 9 September 2016</li>
        <li>Second semester: 15 January 2017</li>
        <li>Third semester: 2 May 2017</li>
    </ul>
    <p>Please let me know if this is ok, and if so which start date you would prefer. You can find more information about important university dates on our website.</p>

    <h2>Subjects of study</h2>
    <p>At the Awesome Science Faculty, we have a pretty open-minded research facility — as long as the subjects fall somewhere in the realm of science and technology. You seem like an intelligent, dedicated researcher, and just the kind of person we'd like to have on our team. Saying that, of the ideas you submitted we were most intrigued by are as follows, in order of priority:</p>
    <ol>
        <li>Turning H<sub>2</sub>O into wine, and the health benefits of Resveratrol (C<sub>14</sub>H<sub>12</sub>O<sub>3</sub>).</li>
        <li>Measuring the effect on performance of funk bassplayers at temperatures exceeding 30°C (86°F), when the audience size exponentially increases (effect of 3 × 10<sup>3</sup> increasing to 3 × 10<sup>4</sup>).</li>
        <li>HTML and CSS constructs for representing musical scores.</li>
    </ol>
    <p>So please can you provide more information on each of these subjects, including how long you'd expect the research to take, required staff and other resources, and anything else you think we'd need to know? Thanks.</p>

    <h2>Exotic dance moves</h2>
    <p>Yes, you are right! As part of my post-doctorate work, I did study exotic tribal dances. To answer your question, my favourite dances are as follows, with definitions:</p>
    <dl>
        <dt>Polynesian chicken dance</dt>
        <dd>A little known but very influential dance dating back as far as 300BC, a whole village would dance around in a circle like chickens, to encourage their livestock to be "fruitful".</dd>
        
        <dt>Icelandic brownian shuffle</dt>
        <dd>Before the Icelanders developed fire as a means of getting warm, they used to practice this dance, which involved huddling close together in a circle on the floor, and shuffling their bodies around in imperceptibly tiny, very rapid movements. One of my fellow students used to say that he thought this dance inspired modern styles such as Twerking.</dd>
        
        <dt>Arctic robot dance</dt>
        <dd>An interesting example of historic misinformation, English explorers in the 1960s believed to have discovered a new dance style characterized by "robotic", stilted movements, being practiced by inhabitants of Northern Alaska and Canada. Later on however it was discovered that they were just moving like this because they were really cold.</dd>
    </dl>
    <p>For more of my research, see my exotic dance research page.</p>

    <p>Yours sincerely,</p>
    <p>Dr Eleanor Gaye</p>
    <p><em>University of Awesome motto: "Be awesome to each other." -- The memoirs of Bill S Preston, Esq</em></p>
</body>
</html>
```
![image](https://github.com/user-attachments/assets/201ff964-52dd-4544-9ede-397ab8a28f73)
![image](https://github.com/user-attachments/assets/75bce073-94a4-4c93-8766-1d9ba9144854)
## Bước 2. Nội dung trong thư
```
<!-- MSSV: 22520252 -->
<!-- Ho va ten: Pham Quang Dinh -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>University Application Response</title>
    <style>
        body {
            max-width: 800px;
            margin: 0 auto;
        }
        .sender-column {
            text-align: right;
        }
        h1 {
            font-size: 1.5em;
        }
        h2 {
            font-size: 1.3em;
        }
        p, ul, ol, dl, address {
            font-size: 1.1em;
        }
        p, li, dd, dt, address {
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <address class="sender-column">
        <strong>Dr. Eleanor Gaye</strong><br>
        Awesome Science faculty<br>
        University of Awesome<br>
        Bobtown, CA 99999,<br>
        USA<br>
        <strong>Tel: 123-456-7890</strong><br>
        <strong>Email: no_reply@example.com</strong><br>
        <time datetime="2016-01-20">20 January 2016</time>
    </address>

    <address>
        <strong>Miss Eileen Dover</strong><br>
        4321 Cliff Top Edge<br>
        Dover, CT9 XXX<br>
        UK
    </address>

    <h1>Re: Eileen Dover university application</h1>

    <p>Dear Eileen,</p>

    <p>Thank you for your recent application to join us at the University of Awesome's science faculty to study as part of your <abbr title="Doctor of Philosophy">PhD</abbr> next year. I will answer your questions one by one, in the following sections.</p>

    <h2>Starting dates</h2>
    <p>We are happy to accommodate you starting your study with us at any time, however it would suit us better if you could start at the beginning of a semester; the start dates for each one are as follows:</p>
    <ul>
        <li>First semester: <time datetime="2016-09-09">9 September 2016</time></li>
        <li>Second semester: <time datetime="2017-01-15">15 January 2017</time></li>
        <li>Third semester: <time datetime="2017-05-02">2 May 2017</time></li>
    </ul>
    <p>Please let me know if this is ok, and if so which start date you would prefer. You can find more information about important university dates on our <a href="https://uit.edu.vn">website</a>.</p>

    <h2>Subjects of study</h2>
    <p>At the Awesome Science Faculty, we have a <strong>pretty open-minded</strong> research facility — as long as the subjects fall somewhere in the realm of science and technology. You seem like an intelligent, dedicated researcher, and just the kind of person we'd like to have on our team. Saying that, of the ideas you submitted we were most intrigued by are as follows, in order of priority:</p>
    <ol>
        <li>Turning H<sub>2</sub>O into wine, and the health benefits of Resveratrol (C<sub>14</sub>H<sub>12</sub>O<sub>3</sub>).</li>
        <li>Measuring the effect on performance of funk bassplayers at temperatures exceeding 30°C (86°F), when the audience size exponentially increases (effect of 3 × 10<sup>3</sup> increasing to 3 × 10<sup>4</sup>).</li>
        <li><abbr title="Hypertext Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr> constructs for representing musical scores.</li>
    </ol>
    <p>So please can you provide more information on each of these subjects, including how long you'd expect the research to take, required staff and other resources, and anything else you think we'd need to know? Thanks.</p>

    <h2>Exotic dance moves</h2>
    <p>Yes, you are right! As part of my post-doctorate work, I did study exotic tribal dances. To answer your question, my favourite dances are as follows, with definitions:</p>
    <dl>
        <dt>Polynesian chicken dance</dt>
        <dd>A little known but very influential dance dating back as far as <abbr title="Before Christ">BC</abbr> 300, a whole village would dance around in a circle like chickens, to encourage their livestock to be "fruitful".</dd>
        
        <dt>Icelandic brownian shuffle</dt>
        <dd>Before the Icelanders developed fire as a means of getting warm, they used to practice this dance, which involved huddling close together in a circle on the floor, and shuffling their bodies around in imperceptibly tiny, very rapid movements. One of my fellow students used to say that he thought this dance inspired modern styles such as Twerking.</dd>
        
        <dt>Arctic robot dance</dt>
        <dd>An interesting example of historic misinformation, English explorers in the 1960s believed to have discovered a new dance style characterized by "robotic", stilted movements, being practiced by inhabitants of Northern Alaska and Canada. Later on however it was discovered that they were just moving like this because they were really cold.</dd>
    </dl>
    <p>For more of my research, see my exotic dance research page on our <a href="https://uit.edu.vn">website</a>.</p>

    <p>Yours sincerely,</p>
    <p><strong>Dr Eleanor Gaye</strong></p>
    <p><em>University of Awesome motto: "Be awesome to each other." -- The memoirs of Bill S <abbr title="Esquire">Esq</abbr></em></p>
</body>
</html>
```
![image](https://github.com/user-attachments/assets/18be4406-df69-4ca2-851d-467ee00e27c7)
![image](https://github.com/user-attachments/assets/1c7efe1a-3f5f-40d9-bd4d-fa3a89b13385)
## Bước 3. Phần nội dung thẻ <head> của tập tin
```
<!-- MSSV: 22520252 -->
<!-- Ho va ten: Pham Quang Dinh -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Dr. Eleanor Gaye">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>University Application Response</title>
    <style>
        body {
            max-width: 800px;
            margin: 0 auto;
        }
        .sender-column {
            text-align: right;
        }
        h1 {
            font-size: 1.5em;
        }
        h2 {
            font-size: 1.3em;
        }
        p, ul, ol, dl, address {
            font-size: 1.1em;
        }
        p, li, dd, dt, address {
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <address class="sender-column">
        <strong>Dr. Eleanor Gaye</strong><br>
        Awesome Science faculty<br>
        University of Awesome<br>
        Bobtown, CA 99999,<br>
        USA<br>
        <strong>Tel: 123-456-7890</strong><br>
        <strong>Email: no_reply@example.com</strong><br>
        <time datetime="2016-01-20">20 January 2016</time>
    </address>

    <address>
        <strong>Miss Eileen Dover</strong><br>
        4321 Cliff Top Edge<br>
        Dover, CT9 XXX<br>
        UK
    </address>

    <h1>Re: Eileen Dover university application</h1>

    <p>Dear Eileen,</p>

    <p>Thank you for your recent application to join us at the University of Awesome's science faculty to study as part of your <abbr title="Doctor of Philosophy">PhD</abbr> next year. I will answer your questions one by one, in the following sections.</p>

    <h2>Starting dates</h2>
    <p>We are happy to accommodate you starting your study with us at any time, however it would suit us better if you could start at the beginning of a semester; the start dates for each one are as follows:</p>
    <ul>
        <li>First semester: <time datetime="2016-09-09">9 September 2016</time></li>
        <li>Second semester: <time datetime="2017-01-15">15 January 2017</time></li>
        <li>Third semester: <time datetime="2017-05-02">2 May 2017</time></li>
    </ul>
    <p>Please let me know if this is ok, and if so which start date you would prefer. You can find more information about important university dates on our <a href="https://uit.edu.vn">website</a>.</p>

    <h2>Subjects of study</h2>
    <p>At the Awesome Science Faculty, we have a <strong>pretty open-minded</strong> research facility — as long as the subjects fall somewhere in the realm of science and technology. You seem like an intelligent, dedicated researcher, and just the kind of person we'd like to have on our team. Saying that, of the ideas you submitted we were most intrigued by are as follows, in order of priority:</p>
    <ol>
        <li>Turning H<sub>2</sub>O into wine, and the health benefits of Resveratrol (C<sub>14</sub>H<sub>12</sub>O<sub>3</sub>).</li>
        <li>Measuring the effect on performance of funk bassplayers at temperatures exceeding 30°C (86°F), when the audience size exponentially increases (effect of 3 × 10<sup>3</sup> increasing to 3 × 10<sup>4</sup>).</li>
        <li><abbr title="Hypertext Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr> constructs for representing musical scores.</li>
    </ol>
    <p>So please can you provide more information on each of these subjects, including how long you'd expect the research to take, required staff and other resources, and anything else you think we'd need to know? Thanks.</p>

    <h2>Exotic dance moves</h2>
    <p>Yes, you are right! As part of my post-doctorate work, I did study exotic tribal dances. To answer your question, my favourite dances are as follows, with definitions:</p>
    <dl>
        <dt>Polynesian chicken dance</dt>
        <dd>A little known but very influential dance dating back as far as <abbr title="Before Christ">BC</abbr> 300, a whole village would dance around in a circle like chickens, to encourage their livestock to be "fruitful".</dd>
        
        <dt>Icelandic brownian shuffle</dt>
        <dd>Before the Icelanders developed fire as a means of getting warm, they used to practice this dance, which involved huddling close together in a circle on the floor, and shuffling their bodies around in imperceptibly tiny, very rapid movements. One of my fellow students used to say that he thought this dance inspired modern styles such as Twerking.</dd>
        
        <dt>Arctic robot dance</dt>
        <dd>An interesting example of historic misinformation, English explorers in the 1960s believed to have discovered a new dance style characterized by "robotic", stilted movements, being practiced by inhabitants of Northern Alaska and Canada. Later on however it was discovered that they were just moving like this because they were really cold.</dd>
    </dl>
    <p>For more of my research, see my exotic dance research page on our <a href="https://uit.edu.vn">website</a>.</p>

    <p>Yours sincerely,</p>
    <p><strong>Dr Eleanor Gaye</strong></p>
    <p><em>University of Awesome motto: "Be awesome to each other." -- The memoirs of Bill S <abbr title="Esquire">Esq</abbr></em></p>
</body>
</html>
```
![image](https://github.com/user-attachments/assets/7ab6bf28-8b6e-4c37-96d8-1271c155cba5)
![image](https://github.com/user-attachments/assets/2e1a45a9-51f5-432a-b374-3f1aad810d7b)


# Raw: LAB1.2
![image](https://github.com/user-attachments/assets/0a570117-d590-4069-9696-0ad01700cadb)
## Bước 1. 
```
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Birdwatching</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300|Cinzel+Decorative:700" rel="stylesheet">
    <link rel="stylesheet" href="style.css">


  </head>

  <body>
    <header>
      <h1>Birdwatching</h1>
      <img src="dove.png" alt="a simple dove logo">

      <nav>
        <ul>
          <li><span>Home</span></li>
          <li><a href="#">Get started</a></li>
          <li><a href="#">Photos</a></li>
          <li><a href="#">Gear</a></li>
          <li><a href="#">Forum</a></li>
        </ul>
      </nav>
    </header>

      <h2>Welcome</h2>

      <p>Welcome to our fake birdwatching site. If this were a real site, it would be the ideal place to come to learn more about birdwatching, whether you are a beginner looking to learn how to get into birding, or an expert wanting to share ideas, tips, and photos with other like-minded people.</p>

      <p>So don't waste time! Get what you need, then turn off that computer and get out into the great outdoors!</p>

      <h2>Favourite photos</h2>

      <a href="favorite-1.jpg"><img src="favorite-1_th.jpg" alt="Small black bird, black claws, long black slender beak, links to larger version of the image"></a>
      <a href="favorite-2.jpg"><img src="favorite-2_th.jpg" alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress, links to larger version of the image"></a>
      <a href="favorite-3.jpg"><img src="favorite-3_th.jpg" alt="Top half of a large bird with white plumage, very long curved narrow light colored break, links to larger version of the image"></a>
      <a href="favorite-4.jpg"><img src="favorite-4_th.jpg" alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak, links to larger version of the image"></a>


      <p>This fake website example is CC0 — any part of this code may be reused in any way you wish. Original example written by Chris Mills, 2016.</p>

      <p><a href="http://game-icons.net/lorc/originals/dove.html">Dove icon</a> by Lorc.</p>

  </body>
</html>
```
![image](https://github.com/user-attachments/assets/2ff90330-4e14-4833-9723-6cffc1b1b52e)

## Bước 2. 
```
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Birdwatching</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300|Cinzel+Decorative:700" rel="stylesheet">
    <link rel="stylesheet" href="style.css">


  </head>

  <body>
    <header>
      <h1>Birdwatching</h1>
      <img src="dove.png" alt="a simple dove logo">

      <nav>
        <ul>
          <li><span>Home</span></li>
          <li><a href="#">Get started</a></li>
          <li><a href="#">Photos</a></li>
          <li><a href="#">Gear</a></li>
          <li><a href="#">Forum</a></li>
        </ul>
      </nav>
    </header>
    <main>

      <article>
        <h2>Welcome</h2>

        <p>Welcome to our fake birdwatching site. If this were a real site, it would be the ideal place to come to learn more about birdwatching, whether you are a beginner looking to learn how to get into birding, or an expert wanting to share ideas, tips, and photos with other like-minded people.</p>

        <p>So don't waste time! Get what you need, then turn off that computer and get out into the great outdoors!</p>
      </article>

      <aside>
        <h2>Favourite photos</h2>

        <a href="favorite-1.jpg"><img src="favorite-1_th.jpg" alt="Small black bird, black claws, long black slender beak, links to larger version of the image"></a>
        <a href="favorite-2.jpg"><img src="favorite-2_th.jpg" alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress, links to larger version of the image"></a>
        <a href="favorite-3.jpg"><img src="favorite-3_th.jpg" alt="Top half of a large bird with white plumage, very long curved narrow light colored break, links to larger version of the image"></a>
        <a href="favorite-4.jpg"><img src="favorite-4_th.jpg" alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak, links to larger version of the image"></a>
      </aside>
    </main>

    <footer>

      <p>This fake website example is CC0 — any part of this code may be reused in any way you wish. Original example written by Chris Mills, 2016.</p>

      <p><a href="http://game-icons.net/lorc/originals/dove.html">Dove icon</a> by Lorc.</p>
    </footer>

  </body>
</html>
```
![image](https://github.com/user-attachments/assets/ecbf1b4f-3545-4070-b6e4-f7dff1d9eae3)



