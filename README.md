# NEX1.

**NEX1 is a tik tok inspired application where users can upload, share, and interact with short video clips!**

This project was created to experiment with NEXT.js, TypeScript, and Tailwind CSS! 😆
Backend was deployed on Sanity CMS and data is called used GROQ (A GraphQL like query language).

Please use this link to demo the live site!
https://nex1-eta.vercel.app/


## Project Screenshot
**Light Mode**
![nex1](https://user-images.githubusercontent.com/71597829/196006148-b4e882fe-1f64-40de-9514-dbceed523df2.jpg)

**Dark Mode**
![nex1_dark](https://user-images.githubusercontent.com/71597829/196017585-98b7df98-01e3-4912-ac16-815afa5c29a0.jpg)


## Update Log

**(October 27, 2022)**
- Fix upload prompt not appearing when uploading
- Video preview not styled correctly on upload page
- Dark mode input fields not visible on upload page


**(October 16, 2022)**
- Fix bug where Video is not centered in mobile view
- Styling and formatting adjustments
- Add **Dark Mode**
- Videos will now autoplay only in view
- Video thumnails now load on iOS and Andriod mobile devices

## Current Features
- Video Playback 🎥
- Google Accounts 🙋
- Video Upload ⬆️
- Video Like & Comment 👍
- Video & Account Search 🔎
- **DARK MODE** 😈

## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript]( 	https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-f03d2f.svg?style=for-the-badge&logo=sanity&logoColor=white)
![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Installation

1. Clone this repository.
```$ git clone https://git@github.com:nickhuynhq/nex1.git```


2. Run `npm install` from inside the client directory.
```bash
$ cd nex1
$ npm install
```

3. Create your own .env.development file
```
NEXT_PUBLIC_SANITY_TOKEN = <YOUR_SANITY_TOKEN>

NEXT_PUBLIC_GOOGLE_API_TOKEN = <YOUR_GOOGLE_API_TOKEN>

NEXT_PUBLIC_BASE_URL = http://localhost:3000
```

4. Make sure your Sanity Backend is running

```bash
$ cd sanity-backend
$ npm start
```

5. Run the app (make sure you are in the root folder)

```bash
$ npm run dev
```

## Author

Nicholas Huynh [@nickhuynhq](https://github.com/nickhuynhq)

![Swag](http://ForTheBadge.com/images/badges/built-with-swag.svg)
