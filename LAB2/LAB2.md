### MSSV: 22520252
### Họ và tên: Phạm Quang Dinh
# LAB2.1
## Bước 1: Chuẩn bị hình ảnh
![image](https://github.com/user-attachments/assets/84cd070a-29d3-4473-bc2c-c2387731fe65)

## Bước 2: Thêm logo vào phần tiêu đề (header)
![image](https://github.com/user-attachments/assets/2d6747c5-7def-4b03-8dea-7c38d3b91b8f)
**Code**

![image](https://github.com/user-attachments/assets/a934dc60-e072-49c7-85a7-d243e1270963)

## Bước 3: Thêm Video vào phần nội dung chính
![image](https://github.com/user-attachments/assets/a7251ac7-8b92-4495-b8d5-0760c098f2eb)
**Code**

![image](https://github.com/user-attachments/assets/5e7fa353-f6ab-4a59-a0d8-3677a3ee8710)

## Bước 4: Thêm hình ảnh đáp ứng và các liên kết thông tin khác
![image](https://github.com/user-attachments/assets/952b8cbf-d231-43dd-a244-89c5cb20c6c9)
**Code**

![image](https://github.com/user-attachments/assets/b32a8e87-8810-417d-9d3e-04f9b8b22f01)
![image](https://github.com/user-attachments/assets/f6408203-bdb3-4c4f-b26a-d3a197419874)

## Bước 5: Hình con gấu trúc đỏ

![image](https://github.com/user-attachments/assets/03b76a42-8c98-4bf9-8fbb-04d0d020382e)
![image](https://github.com/user-attachments/assets/f2684b37-8396-4610-95fe-1a3ebfbf3034)



**Sourcce**
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Mozilla splash page</title>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <style>
      /* header and body setup */
      /*22520252*/
      html {
        font-family: 'Open Sans', sans-serif;
        background: url(pattern.png);
      }

      body {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        background-color: white;
        position: relative;
      }

      /* Header styling */

      header {
        height: 150px;
      }

      header img {
        width: 100px;
        position: absolute;
        right: 32.5px;
        top: 32.5px;
      }

      h1 {
        font-size: 50px;
        line-height: 140px;
        margin: 0 0 0 32.5px;
      }

      /* main section and video styling */

      main {
        background: #ccc;
      }

      article {
        padding: 20px;
      }

      h2 {
        margin-top: 0;
      }

      p {
        line-height: 2;
      }

      iframe {
        float: left;
        margin: 0 20px 20px 0;
        max-width: 100%;
      }

      /* further info links */

      .further-info {
        clear: left;
        padding: 40px 0;
        background: #c13832;
        box-shadow: inset 0 3px 2px rgba(0,0,0,0.5),
                    inset 0 -3px 2px rgba(0,0,0,0.5);
      }

      .further-info a {
        width: 25%;
        display: block;
        float: left;
      }

      .further-info img {
        max-width: 100%;
      }

      .clearfix {
        clear: both;
      }

      /* Red panda image */

      .red-panda img {
        display: block;
        max-width: 100%;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Mozilla</h1>
      <!-- insert <img> element, link to the small
          version of the Firefox logo
          22520252 -->
      <img src="firefox_logo-only_RGB-120px.png">
    </header>

    <main>
      <article>
        <!-- Dinhdeptraizzz 22520252 -->
        <iframe width="400" height="255" src="https://www.youtube.com/embed/ojcNcvb1olg?si=T2t3ULJqM-SXyktu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h2>Rocking the free web</h2>

        <p>Mozilla are a global community of technologists, thinkers, and builders, working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of the Web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future.</p>

        <p>Click on the images below to find more information about the cool stuff Mozilla does. <a href="https://www.flickr.com/photos/mathiasappel/21675551065/">Red panda picture</a> by Mathias Appel.</p>
      </article>

 <div class="further-info">
        <!-- 22520252 -->
        <a href="https://www.mozilla.org/en-US/firefox/new/">
          <img
            src="firefox_logo-only_RGB-400px.png"
            srcset="firefox_logo-only_RGB-400px.png 400w, firefox_logo-only_RGB-120px.png 120w"
            sizes="(max-width: 500px) 120px, 400px"
            alt="Tải Firefox"
          />
        </a>
        <a href="https://www.mozilla.org/">
          <img
            src="mozilla-dinosaur-head-400px.png"
            srcset="
              mozilla-dinosaur-head-400px.png 400w,
              mozilla-dinosaur-head-120px.png 120w
            "
            sizes="(max-width: 500px) 120px, 400px"
            alt="Trang chủ Mozilla"
          />
        </a>
        <a href="https://addons.mozilla.org/">
          <img
            src="firefox-addons-400px.jpg"
            srcset="firefox-addons-400px.jpg 400w, firefox_addons-120px.jpg 120w"
            sizes="(max-width: 500px) 120px, 400px"
            alt="Tiện ích Mozilla"
          />
        </a>
        <a href="https://developer.mozilla.org/en-US/">
          <img src="mdn.svg" alt="Trang nhà phát triển Mozilla" />
        </a>
        <div class="clearfix"></div>
      </div>

      <div class="red-panda">
        <!-- 22520252 -->
        <img src="red-panda-1200px.jpg" srcset="red-panda-1200px.jpg
        1200w, red-panda-600px.jpg 600w sizes="(max-width: 500px) 600px,
        1200px" alt="Red Panda">
      </div>
    </main>
  </body>
</html>
```

# LAB2.2
## Bước 1.
![image](https://github.com/user-attachments/assets/9ecaa6d7-a57e-4741-bcdf-34ef51a225d4)

## Bước 2.
![image](https://github.com/user-attachments/assets/dac3d3e6-584a-4270-bdfb-71ce522196ca)

## Bước 3.
![image](https://github.com/user-attachments/assets/6517e0ae-4cf9-456a-badb-67201916108b)


## Bước 4.
![image](https://github.com/user-attachments/assets/a8330c23-4d2f-40b0-97a2-b639a9bd1ea7)


## Bước 5, 6, 7.
![image](https://github.com/user-attachments/assets/6f1e9e3a-31c0-4476-892e-f5a36e6dbbd3)

**Source**
```
<!DOCTYPE html>
<!-- 22520252 -->
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Planets Data Table</title>
    <link href="minitable-table.css" rel="stylesheet" type="text/css">
</head>
<!-- Dinhdeptraizzz 22520252 -->
<body>
    <h1>Planets Data</h1>
    <table>
        <caption>Data about the planets of our solar system (Planetary facts taken from <a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/">Nasa's Planetary Fact Sheet - Metric</a>).</caption>
    <colgroup>
        <col />
        <col />
        <col style="border: 2px solid black"/>
    </colgroup>
    <thead>
        <tr>
          <th colspan="2"></th>
          <th scope="col">Name</th>
          <th scope="col">Mass (10<sup>24</sup>kg)</th>
          <th scope="col">Diameter (km) </th>
          <th scope="col">Density (kg/m<sup>3</sup>)</th>
          <th scope="col">Gravity (m/s<sup>2</sup>)</th>
          <th scope="col">Length of day (hours)</th>
          <th scope="col">Distance from Sun (10<sup>6</sup>km)</th>
          <th scope="col">Mean temperature (&deg;C)</th>
          <th scope="col">Number of moons</th>
          <th scope="col">Notes</th>
        </tr>
    </thead>

    <tbody>
        <tr>
          <th colspan="2" rowspan="4" scope="rowgroup">Terrestrial planets</th>
          <th scope="row">Mercury</th>
          <td>0.330</td>
          <td>4,879</td>
          <td>5427</td>
          <td>3.7</td>
          <td>4222.6</td>
          <td>57.9</td>
          <td>167</td>
          <td>0</td>
          <td>Closest to the Sun</td>
        </tr>
        <tr>
          <th scope="row">Venus</th>
          <td>4.87</td>
          <td>12,104</td>
          <td>5243</td>
          <td>8.9</td>
          <td>2802.0</td>
          <td>108.2</td>
          <td>464</td>
          <td>0</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Earth</th>
          <td>5.97</td>
          <td>12,756</td>
          <td>5514</td>
          <td>9.8</td>
          <td>24.0</td>
          <td>149.6</td>
          <td>15</td>
          <td>1</td>
          <td>Our world</td>
        </tr>
        <tr>
          <th scope="row">Mars</th>
          <td>0.642</td>
          <td>6,792</td>
          <td>3933</td>
          <td>3.7</td>
          <td>24.7</td>
          <td>227.9</td>
          <td>-65</td>
          <td>2</td>
          <td>The red planet</td>
        </tr>
        <tr>
          <th rowspan="4" scope="rowgroup">Jovian planets</th>
          <th rowspan="2" scope="rowgroup">Gas giants</th>
          <th scope="row">Jupiter</th>
          <td>1898</td>
          <td>142,984</td>
          <td>1326</td>
          <td>23.1</td>
          <td>9.9</td>
          <td>778.6</td>
          <td>-110</td>
          <td>67</td>
          <td>The largest planet</td>
        </tr>
        <tr>
          <th scope="row">Saturn</th>
          <td>568</td>
          <td>120,536</td>
          <td>687</td>
          <td>9.0</td>
          <td>10.7</td>
          <td>1433.5</td>
          <td>-140</td>
          <td>62</td>
          <td></td>
        </tr>
        <tr>
          <th rowspan="2" scope="rowgroup">Ice giants</th>
          <th scope="row">Uranus</th>
          <td>86.8</td>
          <td>51,118</td>
          <td>1271</td>
          <td>8.7</td>
          <td>17.2</td>
          <td>2872.5</td>
          <td>-195</td>
          <td>27</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Neptune</th>
          <td>102</td>
          <td>49,528</td>
          <td>1638</td>
          <td>11.0</td>
          <td>16.1</td>
          <td>4495.1</td>
          <td>-200</td>
          <td>14</td>
          <td></td>
        </tr>
        <tr>
          <th colspan="2" scope="rowgroup">Dwarf planets</th>
          <th scope="row">Pluto</th>
          <td>0.0146</td>
          <td>2,370</td>
          <td>2095</td>
          <td>0.7</td>
          <td>153.3</td>
          <td>5906.4</td>
          <td>-225</td>
          <td>5</td>
          <td>Declassified as a planet in 2006, but this 
            <a href="https://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/">
              remains controversial</a>.</td>
        </tr>
      </tbody>

    </table>


  </body>
</html>
```

