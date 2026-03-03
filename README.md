<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Minizeo
we are develop the shopping site to social media
>>>>>>> 7dbf1ff740fd47acd2986be7178a1fdf86f3d528

first working flow and architure 
public
    |__>index.html
src
  |__>components
  |         |__>header.jsx
  |         |__>loader.jsx
  |         |__>productcard.jsx
  |
  |__>context
  |        |__>cartcontext.jsx
  |        
  |__>pages
  |       |__>cart.jsx
  |       |__>Home.jsx
  |       |__>productdetails.jsx
  |
  |__>styles
  |      |__>cart.css
  |      |__>header.css
  |      |__>home.css
  |      |__>loader.css
  |      |__>productcard.css
  |      |__>productdetails.css
  |__>app.css
  |__>app.jsx
  |__>index.css
  |__>main.jsx

installation

open vs code and open terminal paste line and command in below after run it

1) create a git clone https://github.com/shsbali143/Minizeo.git
2) code .
3) npm install
4) npm eun dev 


**project work tasks**

**Task 1 Assignment**
1️⃣ Project Setup
 Create a new React project.
 Organize the project using proper folder structure:
o components/
o pages/
o services/ (optional for API calls)

2️⃣ Product Listing Page (Home Page )
 Fetch all products from the API.
 Display products in a grid or list.
 Each product card should show:
o Product image
o Product title
o Price
 Add a loading state while data is being fetched.
 Handle API errors gracefully.

3️⃣ Product Details Page (/products/:id)
 When a user clicks on a product, navigate to a new page.
 Fetch product details using the product id.
 Display the following details:
o Product image
o Product title
o Price
o Availability (stock)
o Description

**see i show to you my output**

<img width="1917" height="963" alt="Screenshot 2026-03-03 165252" src="https://github.com/user-attachments/assets/3cbd72e0-6b0c-44d4-93d3-d19ca22d3bb5" />
<img width="1919" height="942" alt="Screenshot 2026-03-03 165326" src="https://github.com/user-attachments/assets/19890256-61d1-4d9c-8419-2f76d4871ef4" />
<img width="1894" height="947" alt="Screenshot 2026-03-03 165347" src="https://github.com/user-attachments/assets/35f2de0c-4237-4b76-baf5-a840fbd30521" />

here is a adding a switch black adn white theme feature 

<img width="1894" height="959" alt="image" src="https://github.com/user-attachments/assets/805761ef-4085-4de6-8cca-658227508263" />

<img width="1897" height="964" alt="Screenshot 2026-03-03 175322" src="https://github.com/user-attachments/assets/65dd2802-1f61-44cf-a192-0f6f8fc4fdfa" />


**Task 2 Assignment**
Add a search input at the top of the product listing page
 Create a cart feature where users can add products. ( Add
to Cart)
 When clicked:
 • Product should be added to cart
• Quantity should increase if already added

<img width="1854" height="837" alt="Screenshot 2026-03-03 175339" src="https://github.com/user-attachments/assets/80704509-9d32-455f-9391-971ef4341c67" />
<img width="1900" height="1012" alt="Screenshot 2026-03-03 175406" src="https://github.com/user-attachments/assets/7c278213-ed2a-4187-bb37-e9ca12fd779e" />
<img width="1892" height="944" alt="Screenshot 2026-03-03 175426" src="https://github.com/user-attachments/assets/0e484e7e-e2b3-4dc5-8a68-5888b7810e86" />
<img width="1892" height="944" alt="Screenshot 2026-03-03 175426" src="https://github.com/user-attachments/assets/01f428f9-c346-44d2-ba5c-636a7237e71b" />
<img width="1915" height="961" alt="Screenshot 2026-03-03 175449" src="https://github.com/user-attachments/assets/26db1366-7f3f-4a46-b551-3bc3cd6777b8" />

