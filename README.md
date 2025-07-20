# Shopping Cart API

This is a simple Shopping Cart API built with Node.js and Express.js. It allows users to manage a shopping cart by adding, editing, deleting items, and calculating the total quantity and total price.

## 📦 Features

- Add items to the cart
- Edit quantity of items
- Delete items from the cart
- View all cart items
- Get total quantity of items
- Get total price of all items

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/shopping-cart-api.git
cd shopping-cart-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node index.js
```

Server will start on `http://localhost:3000`

---

## 🧪 API Endpoints

### Get all cart items
```http
GET /cart
```

### Add an item to the cart
```http
GET /cart/add?productId=3&name=Tablet&price=15000&quantity=1
```

### Edit the quantity of a product
```http
GET /cart/edit?productId=2&quantity=5
```

### Delete an item from the cart
```http
GET /cart/delete?productId=1
```

### Get total quantity of all items
```http
GET /cart/total-quantity
```

### Get total price of all items
```http
GET /cart/total-price
```

---

## 📁 File Structure

```
shopping-cart-api/
├── index.js        # Main server file
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)
- CORS

---

## 📌 Notes

- Data is stored in memory (not persisted).
- Suitable for basic demonstrations and practice with REST APIs.

---

## 📫 Author

**Indira Koona**  
Engineering Student | Full Stack Enthusiast

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
