import { c as createServerRpc, a as connectToDatabase } from "./mongodb-BUiU-xNk.mjs";
import { c as createServerFn } from "./server-ChEk9dwB.mjs";
import { l as libExports } from "../_libs/mongodb.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "crypto";
import "../_libs/isbot.mjs";
import "timers/promises";
import "timers";
import "fs";
import "http";
import "process";
import "events";
import "dns";
import "url";
import "zlib";
import "net";
import "fs/promises";
import "tls";
import "child_process";
import "../_libs/bson.mjs";
import "../_libs/mongodb-connection-string-url.mjs";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "../_libs/tr46.mjs";
import "../_libs/punycode.mjs";
import "../_libs/mongodb-js__saslprep.mjs";
import "../_libs/sparse-bitfield.mjs";
import "../_libs/memory-pager.mjs";
const loginFn_createServerFn_handler = createServerRpc({
  id: "dffd028f78905c56b70ca9e6a50feea29d2b2ad2308920737aa975126e2e61cd",
  name: "loginFn",
  filename: "src/functions/auth.ts"
}, (opts) => loginFn.__executeServer(opts));
const loginFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(loginFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      email: data.email
    });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    if (user.password !== data.password) {
      throw new Error("Invalid credentials");
    }
    const userId = user._id instanceof libExports.ObjectId ? user._id.toString() : user._id;
    const token = btoa(`${userId}:${Date.now()}`);
    return {
      user: {
        id: userId,
        email: user.email,
        name: user.name,
        role: user.role || (user.email.toLowerCase().startsWith("admin@") ? "admin" : "user")
      },
      token
    };
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
});
const registerFn_createServerFn_handler = createServerRpc({
  id: "75a2b931b7a4e86dec4cd242ce282bc580171500c6a7c6919550f3b527968087",
  name: "registerFn",
  filename: "src/functions/auth.ts"
}, (opts) => registerFn.__executeServer(opts));
const registerFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(registerFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const existingUser = await db.collection("users").findOne({
      email: data.email
    });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const isAdmin = data.email.toLowerCase().startsWith("admin@") || data.email.toLowerCase() === "admin@fastcomputers.com";
    const user = {
      email: data.email,
      password: data.password,
      name: data.name,
      role: isAdmin ? "admin" : "user",
      createdAt: /* @__PURE__ */ new Date(),
      cart: [],
      wishlist: []
    };
    const result = await db.collection("users").insertOne(user);
    const userId = result.insertedId instanceof libExports.ObjectId ? result.insertedId.toString() : result.insertedId;
    const token = btoa(`${userId}:${Date.now()}`);
    return {
      user: {
        id: userId,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    };
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
});
const getCartFn_createServerFn_handler = createServerRpc({
  id: "94e432d3fb260536d4f8ccc2d8db32aa78340dc310391b9c71f521e4180e596a",
  name: "getCartFn",
  filename: "src/functions/auth.ts"
}, (opts) => getCartFn.__executeServer(opts));
const getCartFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getCartFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: new libExports.ObjectId(data.userId)
    });
    if (!user) {
      throw new Error("User not found");
    }
    return {
      cart: user.cart || []
    };
  } catch (error) {
    console.error("Get cart error:", error);
    throw error;
  }
});
const addToCartFn_createServerFn_handler = createServerRpc({
  id: "db5b86426813f3a2fe756a5674fa507b9ea076bc5928caa7a070e577240bc276",
  name: "addToCartFn",
  filename: "src/functions/auth.ts"
}, (opts) => addToCartFn.__executeServer(opts));
const addToCartFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(addToCartFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: new libExports.ObjectId(data.userId)
    });
    if (!user) {
      throw new Error("User not found");
    }
    const cart = user.cart || [];
    const existingItem = cart.find((item) => item.productId === data.productId);
    if (existingItem) {
      existingItem.quantity += data.quantity;
    } else {
      cart.push({
        productId: data.productId,
        quantity: data.quantity,
        addedAt: /* @__PURE__ */ new Date()
      });
    }
    await db.collection("users").updateOne({
      _id: new libExports.ObjectId(data.userId)
    }, {
      $set: {
        cart
      }
    });
    return {
      cart
    };
  } catch (error) {
    console.error("Add to cart error:", error);
    throw error;
  }
});
const removeFromCartFn_createServerFn_handler = createServerRpc({
  id: "c80f1b27a43499919ee1ae165610147b95a2cd1385279f34cae82531d4d2cc3c",
  name: "removeFromCartFn",
  filename: "src/functions/auth.ts"
}, (opts) => removeFromCartFn.__executeServer(opts));
const removeFromCartFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(removeFromCartFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: new libExports.ObjectId(data.userId)
    });
    if (!user) {
      throw new Error("User not found");
    }
    const cart = (user.cart || []).filter((item) => item.productId !== data.productId);
    await db.collection("users").updateOne({
      _id: new libExports.ObjectId(data.userId)
    }, {
      $set: {
        cart
      }
    });
    return {
      cart
    };
  } catch (error) {
    console.error("Remove from cart error:", error);
    throw error;
  }
});
const updateCartQuantityFn_createServerFn_handler = createServerRpc({
  id: "0fb8bf0af5955b789c6fec9b8774c9453e8a8a74704b6506827c4d846b5d445b",
  name: "updateCartQuantityFn",
  filename: "src/functions/auth.ts"
}, (opts) => updateCartQuantityFn.__executeServer(opts));
const updateCartQuantityFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(updateCartQuantityFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: new libExports.ObjectId(data.userId)
    });
    if (!user) {
      throw new Error("User not found");
    }
    const cart = user.cart || [];
    const item = cart.find((item2) => item2.productId === data.productId);
    if (item) {
      item.quantity = data.quantity;
    }
    await db.collection("users").updateOne({
      _id: new libExports.ObjectId(data.userId)
    }, {
      $set: {
        cart
      }
    });
    return {
      cart
    };
  } catch (error) {
    console.error("Update cart quantity error:", error);
    throw error;
  }
});
const getWishlistFn_createServerFn_handler = createServerRpc({
  id: "cd1302faf65c9fad19448737d8a1450b4df37cd40a170760866eb196d064df66",
  name: "getWishlistFn",
  filename: "src/functions/auth.ts"
}, (opts) => getWishlistFn.__executeServer(opts));
const getWishlistFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getWishlistFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: new libExports.ObjectId(data.userId)
    });
    if (!user) {
      throw new Error("User not found");
    }
    return {
      wishlist: user.wishlist || []
    };
  } catch (error) {
    console.error("Get wishlist error:", error);
    throw error;
  }
});
const addToWishlistFn_createServerFn_handler = createServerRpc({
  id: "cebc58c2c3865fe338883e3b2b21fcc97a4c222ca814ef4feb3c7086c22d794c",
  name: "addToWishlistFn",
  filename: "src/functions/auth.ts"
}, (opts) => addToWishlistFn.__executeServer(opts));
const addToWishlistFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(addToWishlistFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: new libExports.ObjectId(data.userId)
    });
    if (!user) {
      throw new Error("User not found");
    }
    const wishlist = user.wishlist || [];
    if (!wishlist.includes(data.productId)) {
      wishlist.push(data.productId);
    }
    await db.collection("users").updateOne({
      _id: new libExports.ObjectId(data.userId)
    }, {
      $set: {
        wishlist
      }
    });
    return {
      wishlist
    };
  } catch (error) {
    console.error("Add to wishlist error:", error);
    throw error;
  }
});
const removeFromWishlistFn_createServerFn_handler = createServerRpc({
  id: "5b24b6ec026e487b80c190e6ce6bef7e0d718265919f3f77d512cb8740a15bde",
  name: "removeFromWishlistFn",
  filename: "src/functions/auth.ts"
}, (opts) => removeFromWishlistFn.__executeServer(opts));
const removeFromWishlistFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(removeFromWishlistFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: new libExports.ObjectId(data.userId)
    });
    if (!user) {
      throw new Error("User not found");
    }
    const wishlist = (user.wishlist || []).filter((id) => id !== data.productId);
    await db.collection("users").updateOne({
      _id: new libExports.ObjectId(data.userId)
    }, {
      $set: {
        wishlist
      }
    });
    return {
      wishlist
    };
  } catch (error) {
    console.error("Remove from wishlist error:", error);
    throw error;
  }
});
const getProductsFn_createServerFn_handler = createServerRpc({
  id: "cacad11326d187e0e439c85f77397e88de42eba8506ff7be999478b6ff3f24e7",
  name: "getProductsFn",
  filename: "src/functions/auth.ts"
}, (opts) => getProductsFn.__executeServer(opts));
const getProductsFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getProductsFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const query = {};
    if (data.category) query.cat = data.category;
    if (data.search) {
      query.$or = [{
        name: {
          $regex: data.search,
          $options: "i"
        }
      }, {
        brand: {
          $regex: data.search,
          $options: "i"
        }
      }, {
        cat: {
          $regex: data.search,
          $options: "i"
        }
      }];
    }
    const products = await db.collection("products").find(query).limit(data.limit || 50).skip(data.skip || 0).toArray();
    const total = await db.collection("products").countDocuments(query);
    const serializedProducts = products.map((product) => ({
      ...product,
      _id: product._id instanceof libExports.ObjectId ? product._id.toString() : product._id
    }));
    return {
      products: serializedProducts,
      total
    };
  } catch (error) {
    console.error("Get products error:", error);
    throw error;
  }
});
const getProductFn_createServerFn_handler = createServerRpc({
  id: "1318f69560e563dfa76d14788ed27b3d0607d1fb82afee22a09dee4d17c1c1e3",
  name: "getProductFn",
  filename: "src/functions/auth.ts"
}, (opts) => getProductFn.__executeServer(opts));
const getProductFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getProductFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const product = await db.collection("products").findOne({
      id: data.id
    });
    if (!product) {
      throw new Error("Product not found");
    }
    const serializedProduct = {
      ...product,
      _id: product._id instanceof libExports.ObjectId ? product._id.toString() : product._id
    };
    return {
      product: serializedProduct
    };
  } catch (error) {
    console.error("Get product error:", error);
    throw error;
  }
});
const createOrderFn_createServerFn_handler = createServerRpc({
  id: "86401f61f3f84ef9b7da26da5e6bf60401a241fbc4f98ec0d44a448a98c8d2af",
  name: "createOrderFn",
  filename: "src/functions/auth.ts"
}, (opts) => createOrderFn.__executeServer(opts));
const createOrderFn = createServerFn({
  method: "POST"
}).validator((data) => {
  if (!data.items || data.items.length === 0) {
    throw new Error("Cart cannot be empty");
  }
  if (!data.fullName || data.fullName.trim() === "") {
    throw new Error("Full name is required");
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error("Valid email is required");
  }
  if (!data.phone || data.phone.trim() === "") {
    throw new Error("Phone number is required");
  }
  if (!data.address || data.address.trim() === "") {
    throw new Error("Address is required");
  }
  if (!data.city || data.city.trim() === "") {
    throw new Error("City is required");
  }
  if (!data.postalCode || data.postalCode.trim() === "") {
    throw new Error("Postal code is required");
  }
  if (!data.paymentMethod || data.paymentMethod.trim() === "") {
    throw new Error("Payment method is required");
  }
  if (data.total <= 0) {
    throw new Error("Invalid total amount");
  }
  return data;
}).handler(createOrderFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const order = {
      userId: data.userId || null,
      items: data.items,
      total: data.total,
      shipping: data.shipping,
      tax: data.tax,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
      paymentMethod: data.paymentMethod,
      status: "pending",
      createdAt: /* @__PURE__ */ new Date(),
      orderNumber: `FC-${Date.now().toString().slice(-8)}`
    };
    const result = await db.collection("orders").insertOne(order);
    if (data.userId) {
      await db.collection("users").updateOne({
        _id: new libExports.ObjectId(data.userId)
      }, {
        $set: {
          cart: []
        }
      });
    }
    return {
      success: true,
      orderId: result.insertedId.toString(),
      orderNumber: order.orderNumber
    };
  } catch (error) {
    console.error("Create order error:", error);
    throw error;
  }
});
const getOrdersFn_createServerFn_handler = createServerRpc({
  id: "7b8859a3fe5868584f2f3f2a8a9bb9bf672f344b8d94985dd96c2bc334ba3111",
  name: "getOrdersFn",
  filename: "src/functions/auth.ts"
}, (opts) => getOrdersFn.__executeServer(opts));
const getOrdersFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getOrdersFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const query = {};
    if (data.userId) {
      query.$or = [{
        userId: data.userId
      }, {
        email: data.email
      }];
    } else if (data.email) {
      query.email = data.email;
    }
    const orders = await db.collection("orders").find(query).sort({
      createdAt: -1
    }).toArray();
    const serializedOrders = orders.map((order) => ({
      ...order,
      _id: order._id instanceof libExports.ObjectId ? order._id.toString() : order._id
    }));
    return {
      orders: serializedOrders
    };
  } catch (error) {
    console.error("Get orders error:", error);
    throw error;
  }
});
const getAllOrdersFn_createServerFn_handler = createServerRpc({
  id: "a9501e7540f0d9747f2e64b91596e7cb7d88afb8a591ba8b2a3839e188d51bd5",
  name: "getAllOrdersFn",
  filename: "src/functions/auth.ts"
}, (opts) => getAllOrdersFn.__executeServer(opts));
const getAllOrdersFn = createServerFn({
  method: "GET"
}).handler(getAllOrdersFn_createServerFn_handler, async () => {
  try {
    const db = await connectToDatabase();
    const orders = await db.collection("orders").find({}).sort({
      createdAt: -1
    }).toArray();
    const serializedOrders = orders.map((order) => ({
      ...order,
      _id: order._id instanceof libExports.ObjectId ? order._id.toString() : order._id
    }));
    return {
      orders: serializedOrders
    };
  } catch (error) {
    console.error("Get all orders error:", error);
    throw error;
  }
});
const updateOrderStatusFn_createServerFn_handler = createServerRpc({
  id: "d086f05cf68e0ba04e2b2d6306ef3fc247b67ab9ee3c448e969c316d97516de5",
  name: "updateOrderStatusFn",
  filename: "src/functions/auth.ts"
}, (opts) => updateOrderStatusFn.__executeServer(opts));
const updateOrderStatusFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(updateOrderStatusFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const validStatuses = ["pending", "shipped", "delivered", "cancelled"];
    if (!validStatuses.includes(data.status)) {
      throw new Error("Invalid status");
    }
    const result = await db.collection("orders").updateOne({
      _id: new libExports.ObjectId(data.orderId)
    }, {
      $set: {
        status: data.status
      }
    });
    if (result.matchedCount === 0) {
      throw new Error("Order not found");
    }
    return {
      success: true
    };
  } catch (error) {
    console.error("Update order status error:", error);
    throw error;
  }
});
export {
  addToCartFn_createServerFn_handler,
  addToWishlistFn_createServerFn_handler,
  createOrderFn_createServerFn_handler,
  getAllOrdersFn_createServerFn_handler,
  getCartFn_createServerFn_handler,
  getOrdersFn_createServerFn_handler,
  getProductFn_createServerFn_handler,
  getProductsFn_createServerFn_handler,
  getWishlistFn_createServerFn_handler,
  loginFn_createServerFn_handler,
  registerFn_createServerFn_handler,
  removeFromCartFn_createServerFn_handler,
  removeFromWishlistFn_createServerFn_handler,
  updateCartQuantityFn_createServerFn_handler,
  updateOrderStatusFn_createServerFn_handler
};
