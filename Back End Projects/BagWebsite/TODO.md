# TODO: Implement Quantity Operations in Cart

- [x] Fix /addtocart in routes/index.js to push object {product: productid, quantity: 1} instead of just productid
- [x] Add /increment/:index route in routes/index.js to increase quantity of cart item at index
- [x] Add /decrement/:index route in routes/index.js to decrease quantity of cart item at index (minimum 1)
- [x] Edit views/cart.ejs:
  - [x] Change loop variable from 'product' to 'item'
  - [x] Update references to use item.product for product details
  - [x] Display item.quantity instead of hardcoded "01"
  - [x] Add form buttons for + and - (with page refresh for updates)
  - [ ] Implement AJAX calls to increment/decrement routes (optional for dynamic update)
  - [ ] Update quantity display and totals dynamically after AJAX response (optional)
- [x] Test the functionality to ensure totals calculate correctly with quantity changes (run server with node app.js and check /cart)
