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
![Uploading image.png…]()


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
