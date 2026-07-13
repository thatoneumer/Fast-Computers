import { c as createServerRpc, a as connectToDatabase } from "./mongodb-BSkqG-vF.mjs";
import { c as createServerFn } from "./server-Y9zJBdke.mjs";
import { l as libExports } from "../_libs/mongodb.mjs";
import { s as sendEmail } from "./email-CrmUIKV1.mjs";
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
const getProductsByIdsFn_createServerFn_handler = createServerRpc({
  id: "0e0c2286f70691c8573f986e3d214b27dedef1b45ad40585455c6d701b868753",
  name: "getProductsByIdsFn",
  filename: "src/functions/auth.ts"
}, (opts) => getProductsByIdsFn.__executeServer(opts));
const getProductsByIdsFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(getProductsByIdsFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const objectIdList = [];
    const customIdList = [];
    for (const id of data.ids) {
      if (/^[0-9a-fA-F]{24}$/.test(id)) {
        objectIdList.push(new libExports.ObjectId(id));
      } else {
        customIdList.push(id);
      }
    }
    const query = {
      $or: []
    };
    if (objectIdList.length > 0) query.$or.push({
      _id: {
        $in: objectIdList
      }
    });
    if (customIdList.length > 0) query.$or.push({
      customId: {
        $in: customIdList
      }
    });
    if (query.$or.length === 0) return {
      products: []
    };
    const products = await db.collection("products").find(query).toArray();
    const serializedProducts = products.map((product) => {
      const _idStr = product._id instanceof libExports.ObjectId ? product._id.toString() : product._id;
      return {
        ...product,
        _id: _idStr,
        // Normalize: expose 'id' so productsMap lookup matches what cart stored
        id: product.customId || _idStr
      };
    });
    return {
      products: serializedProducts
    };
  } catch (error) {
    console.error("Get products by IDs error:", error);
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
const generateDeliveryEmailHTML = (orderNumber, items, userName, orderId) => {
  const itemsHtml = items.map((item) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #222;">
        <div style="font-weight: bold; color: #fbfbfb; font-size: 14px;">${item.name}</div>
        <div style="color: #71717a; font-size: 12px;">Qty: ${item.quantity}</div>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #222; text-align: right; font-weight: bold; color: #dc2626;">
        PKR ${item.price.toLocaleString()}
      </td>
    </tr>
  `).join("");
  return `
    <div style="background-color: #0b0b0c; color: #fbfbfb; font-family: 'Rajdhani', 'Inter', sans-serif; padding: 40px; border: 1px solid #38383a; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 30px;">
        <span style="font-size: 28px; font-weight: bold; letter-spacing: 0.1em;">F<span style="color: #dc2626;">/</span>AST</span>
        <span style="font-size: 11px; text-transform: uppercase; color: #a1a1aa; border-left: 1px solid #38383a; padding-left: 12px; margin-left: 8px; letter-spacing: 0.3em;">COMPUTERS</span>
      </div>
      <div style="background: linear-gradient(90deg, #dc262620, transparent); border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
        <h2 style="font-family: 'Oswald', sans-serif; font-size: 22px; text-transform: uppercase; margin: 0; color: #fbfbfb;">✅ Order Delivered!</h2>
        <p style="margin: 6px 0 0; color: #a1a1aa; font-size: 14px;">Your order has been successfully delivered.</p>
      </div>
      <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa;">Hello <strong style="color: #fbfbfb;">${userName || "Valued Customer"}</strong>,</p>
      <p style="font-size: 15px; line-height: 1.6; color: #a1a1aa;">Great news! Your order <strong style="color: #dc2626;">${orderNumber}</strong> has been delivered. We hope you love your new gear!</p>
      
      <div style="background-color: #121214; border: 1px solid #222; padding: 20px; margin: 24px 0;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #71717a; margin-bottom: 12px;">Order Summary</div>
        <table style="width: 100%; border-collapse: collapse;">
          ${itemsHtml}
        </table>
      </div>

      <div style="background-color: #0f0f10; border: 1px dashed #dc262640; padding: 20px; margin: 24px 0; text-align: center;">
        <div style="font-size: 13px; color: #a1a1aa; margin-bottom: 8px;">Share your experience!</div>
        <div style="font-size: 15px; font-weight: bold; color: #fbfbfb;">⭐ Review your purchased products</div>
        <div style="font-size: 12px; color: #71717a; margin-top: 6px;">Visit your Orders page to leave a review and help other customers.</div>
      </div>

      <p style="font-size: 14px; line-height: 1.6; color: #71717a;">Thank you for shopping with Fast Computers. If you have any issues, please contact our support team.</p>
      <div style="border-top: 1px solid #222; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #71717a; text-align: center; text-transform: uppercase; letter-spacing: 0.2em;">
        © 2026 Fast Computers · Lahore, Pakistan
      </div>
    </div>
  `;
};
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
    const order = await db.collection("orders").findOne({
      _id: new libExports.ObjectId(data.orderId)
    });
    if (!order) throw new Error("Order not found");
    const result = await db.collection("orders").updateOne({
      _id: new libExports.ObjectId(data.orderId)
    }, {
      $set: {
        status: data.status,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    if (result.matchedCount === 0) {
      throw new Error("Order not found");
    }
    if (data.status === "delivered" && order.email) {
      try {
        const htmlBody = generateDeliveryEmailHTML(order.orderNumber, order.items || [], order.fullName || "", data.orderId);
        await sendEmail({
          to: order.email,
          subject: `✅ Order Delivered: ${order.orderNumber} — Fast Computers`,
          htmlBody
        });
      } catch (emailErr) {
        console.error("Delivery email send error (non-fatal):", emailErr);
      }
    }
    return {
      success: true
    };
  } catch (error) {
    console.error("Update order status error:", error);
    throw error;
  }
});
const submitReviewFn_createServerFn_handler = createServerRpc({
  id: "cc7f0b539efc233c6e6b88b9f6dabafe4cea28730793acb66cf76c80cfbb5835",
  name: "submitReviewFn",
  filename: "src/functions/auth.ts"
}, (opts) => submitReviewFn.__executeServer(opts));
const submitReviewFn = createServerFn({
  method: "POST"
}).validator((data) => {
  if (!data.userId) throw new Error("Must be logged in to submit a review");
  if (!data.productId) throw new Error("Product ID is required");
  if (!data.rating || data.rating < 1 || data.rating > 5) throw new Error("Rating must be between 1 and 5");
  if (!data.comment || data.comment.trim().length < 5) throw new Error("Review comment must be at least 5 characters");
  return data;
}).handler(submitReviewFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      _id: new libExports.ObjectId(data.userId)
    });
    if (!user) throw new Error("User not found");
    const deliveredOrder = await db.collection("orders").findOne({
      $or: [{
        userId: data.userId
      }, {
        email: user.email
      }],
      status: "delivered",
      "items.productId": data.productId
    });
    if (!deliveredOrder) {
      throw new Error("You can only review products you have purchased and received.");
    }
    const existingReview = await db.collection("reviews").findOne({
      userId: data.userId,
      productId: data.productId
    });
    if (existingReview) {
      throw new Error("You have already reviewed this product.");
    }
    const review = {
      userId: data.userId,
      userName: user.name || "Anonymous",
      userEmail: user.email,
      productId: data.productId,
      orderId: deliveredOrder._id.toString(),
      rating: Number(data.rating),
      comment: data.comment.trim(),
      createdAt: /* @__PURE__ */ new Date()
    };
    const result = await db.collection("reviews").insertOne(review);
    const allReviews = await db.collection("reviews").find({
      productId: data.productId
    }).toArray();
    const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
    await db.collection("products").updateOne({
      $or: [{
        id: data.productId
      }, {
        customId: data.productId
      }]
    }, {
      $set: {
        rating: Math.round(avgRating * 10) / 10,
        reviewCount: allReviews.length
      }
    });
    return {
      success: true,
      reviewId: result.insertedId.toString()
    };
  } catch (error) {
    console.error("Submit review error:", error);
    throw error;
  }
});
const getReviewsFn_createServerFn_handler = createServerRpc({
  id: "e2ee6585b1728381aa555d35d6c5a5c860d5083b154005bcf471a86cf1ca5fb1",
  name: "getReviewsFn",
  filename: "src/functions/auth.ts"
}, (opts) => getReviewsFn.__executeServer(opts));
const getReviewsFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getReviewsFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const reviews = await db.collection("reviews").find({
      productId: data.productId
    }).sort({
      createdAt: -1
    }).toArray();
    const serialized = reviews.map((r) => ({
      ...r,
      _id: r._id instanceof libExports.ObjectId ? r._id.toString() : r._id
    }));
    const avgRating = serialized.length ? Math.round(serialized.reduce((s, r) => s + r.rating, 0) / serialized.length * 10) / 10 : 0;
    return {
      reviews: serialized,
      avgRating,
      total: serialized.length
    };
  } catch (error) {
    console.error("Get reviews error:", error);
    throw error;
  }
});
const getUserReviewedProductsFn_createServerFn_handler = createServerRpc({
  id: "945488d270b1df2f5ec3e796060c88f0b2e58349a7767548aff664a49bf82ec4",
  name: "getUserReviewedProductsFn",
  filename: "src/functions/auth.ts"
}, (opts) => getUserReviewedProductsFn.__executeServer(opts));
const getUserReviewedProductsFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getUserReviewedProductsFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const reviews = await db.collection("reviews").find({
      userId: data.userId
    }).toArray();
    const productIds = reviews.map((r) => r.productId);
    return {
      reviewedProductIds: productIds
    };
  } catch (error) {
    console.error("Get user reviewed products error:", error);
    return {
      reviewedProductIds: []
    };
  }
});
const getAllReviewsFn_createServerFn_handler = createServerRpc({
  id: "11c9376692fed1b9062d923132f3f70f9742b7c4011beb72b59596e6e3794c4f",
  name: "getAllReviewsFn",
  filename: "src/functions/auth.ts"
}, (opts) => getAllReviewsFn.__executeServer(opts));
const getAllReviewsFn = createServerFn({
  method: "GET"
}).handler(getAllReviewsFn_createServerFn_handler, async () => {
  try {
    const db = await connectToDatabase();
    const reviews = await db.collection("reviews").find({}).sort({
      createdAt: -1
    }).toArray();
    const productIds = [...new Set(reviews.map((r) => r.productId))];
    const products = await db.collection("products").find({
      $or: [{
        id: {
          $in: productIds
        }
      }, {
        customId: {
          $in: productIds
        }
      }]
    }).toArray();
    const productMap = {};
    products.forEach((p) => {
      const pId = p.id || p.customId || p._id.toString();
      productMap[pId] = p.name;
    });
    const serialized = reviews.map((r) => ({
      ...r,
      _id: r._id instanceof libExports.ObjectId ? r._id.toString() : r._id,
      productName: productMap[r.productId] || r.productId
    }));
    return {
      reviews: serialized
    };
  } catch (error) {
    console.error("Get all reviews error:", error);
    throw error;
  }
});
const deleteReviewFn_createServerFn_handler = createServerRpc({
  id: "991e79803e91f4828d9752bda16890df22ebfe199325a5dd11347e41d429cd78",
  name: "deleteReviewFn",
  filename: "src/functions/auth.ts"
}, (opts) => deleteReviewFn.__executeServer(opts));
const deleteReviewFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(deleteReviewFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const review = await db.collection("reviews").findOne({
      _id: new libExports.ObjectId(data.reviewId)
    });
    if (!review) throw new Error("Review not found");
    await db.collection("reviews").deleteOne({
      _id: new libExports.ObjectId(data.reviewId)
    });
    const remaining = await db.collection("reviews").find({
      productId: review.productId
    }).toArray();
    const newAvg = remaining.length ? Math.round(remaining.reduce((s, r) => s + r.rating, 0) / remaining.length * 10) / 10 : 0;
    await db.collection("products").updateOne({
      $or: [{
        id: review.productId
      }, {
        customId: review.productId
      }]
    }, {
      $set: {
        rating: newAvg,
        reviewCount: remaining.length
      }
    });
    return {
      success: true
    };
  } catch (error) {
    console.error("Delete review error:", error);
    throw error;
  }
});
const generateResetEmailHTML = (otp, name) => {
  return `
    <div style="background-color: #0b0b0c; color: #fbfbfb; font-family: 'Rajdhani', 'Inter', sans-serif; padding: 40px; border: 1px solid #38383a; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 30px;">
        <span style="font-size: 28px; font-weight: bold; letter-spacing: 0.1em;">F<span style="color: #dc2626;">/</span>AST</span>
        <span style="font-size: 11px; text-transform: uppercase; color: #a1a1aa; border-left: 1px solid #38383a; padding-left: 12px; margin-left: 8px; letter-spacing: 0.3em;">COMPUTERS</span>
      </div>
      <h2 style="font-family: 'Oswald', sans-serif; font-size: 24px; text-transform: uppercase; border-bottom: 2px solid #dc2626; padding-bottom: 10px; color: #fbfbfb;">Password Recovery</h2>
      <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa;">Hello ${name || "User"},</p>
      <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa;">We received a request to reset your password. Use the following 6-digit verification code to proceed:</p>
      <div style="background-color: #121214; border: 1px dashed #dc2626; font-size: 32px; font-weight: bold; letter-spacing: 0.15em; text-align: center; padding: 20px; margin: 30px 0; color: #dc2626; font-family: monospace;">
        ${otp}
      </div>
      <p style="font-size: 14px; line-height: 1.6; color: #71717a;">This verification code is valid for 10 minutes. If you did not initiate this request, you can safely ignore this email.</p>
      <div style="border-top: 1px solid #222; margin-top: 40px; padding-top: 20px; font-size: 12px; color: #71717a; text-align: center; text-transform: uppercase; letter-spacing: 0.2em;">
        © 2026 Fast Computers · Lahore, Pakistan
      </div>
    </div>
  `;
};
const sendResetOtpFn_createServerFn_handler = createServerRpc({
  id: "38512b3984daaa9bdd0ea4921e83fadc1d1f0d3be574cef6c57836ee141ecc46",
  name: "sendResetOtpFn",
  filename: "src/functions/auth.ts"
}, (opts) => sendResetOtpFn.__executeServer(opts));
const sendResetOtpFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(sendResetOtpFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      email: data.email
    });
    if (!user) {
      throw new Error("Email address not registered");
    }
    const otp = Math.floor(1e5 + Math.random() * 9e5).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1e3);
    await db.collection("users").updateOne({
      _id: user._id
    }, {
      $set: {
        resetOtp: otp,
        resetOtpExpires: expires
      }
    });
    const htmlBody = generateResetEmailHTML(otp, user.name);
    const emailResult = await sendEmail({
      to: data.email,
      subject: `Reset Password Verification Code: ${otp}`,
      htmlBody
    });
    if (!emailResult.success) {
      throw new Error(emailResult.error || "Failed to send OTP email");
    }
    return {
      success: true
    };
  } catch (error) {
    console.error("Send reset OTP error:", error);
    throw error;
  }
});
const verifyOtpFn_createServerFn_handler = createServerRpc({
  id: "b561e8dc6678b1560f1a2a933da6f111d48854b265bd23a8f7fe9dc39ca07f86",
  name: "verifyOtpFn",
  filename: "src/functions/auth.ts"
}, (opts) => verifyOtpFn.__executeServer(opts));
const verifyOtpFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(verifyOtpFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      email: data.email
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (!user.resetOtp || user.resetOtp !== data.otp) {
      throw new Error("Invalid verification code");
    }
    if (!user.resetOtpExpires || new Date(user.resetOtpExpires) < /* @__PURE__ */ new Date()) {
      throw new Error("Verification code has expired. Please request a new one.");
    }
    return {
      success: true
    };
  } catch (error) {
    console.error("Verify OTP error:", error);
    throw error;
  }
});
const verifyOtpAndResetPasswordFn_createServerFn_handler = createServerRpc({
  id: "6a24a9de82d39d09df7d466a7ba6113ffe178edabef9637d07ce979de0e81580",
  name: "verifyOtpAndResetPasswordFn",
  filename: "src/functions/auth.ts"
}, (opts) => verifyOtpAndResetPasswordFn.__executeServer(opts));
const verifyOtpAndResetPasswordFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(verifyOtpAndResetPasswordFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({
      email: data.email
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (!user.resetOtp || user.resetOtp !== data.otp) {
      throw new Error("Invalid verification code");
    }
    if (!user.resetOtpExpires || new Date(user.resetOtpExpires) < /* @__PURE__ */ new Date()) {
      throw new Error("Verification code has expired");
    }
    await db.collection("users").updateOne({
      _id: user._id
    }, {
      $set: {
        password: data.newPassword
      },
      $unset: {
        resetOtp: "",
        resetOtpExpires: ""
      }
    });
    return {
      success: true
    };
  } catch (error) {
    console.error("Verify OTP and reset password error:", error);
    throw error;
  }
});
export {
  addToCartFn_createServerFn_handler,
  addToWishlistFn_createServerFn_handler,
  createOrderFn_createServerFn_handler,
  deleteReviewFn_createServerFn_handler,
  getAllOrdersFn_createServerFn_handler,
  getAllReviewsFn_createServerFn_handler,
  getCartFn_createServerFn_handler,
  getOrdersFn_createServerFn_handler,
  getProductFn_createServerFn_handler,
  getProductsByIdsFn_createServerFn_handler,
  getProductsFn_createServerFn_handler,
  getReviewsFn_createServerFn_handler,
  getUserReviewedProductsFn_createServerFn_handler,
  getWishlistFn_createServerFn_handler,
  loginFn_createServerFn_handler,
  registerFn_createServerFn_handler,
  removeFromCartFn_createServerFn_handler,
  removeFromWishlistFn_createServerFn_handler,
  sendResetOtpFn_createServerFn_handler,
  submitReviewFn_createServerFn_handler,
  updateCartQuantityFn_createServerFn_handler,
  updateOrderStatusFn_createServerFn_handler,
  verifyOtpAndResetPasswordFn_createServerFn_handler,
  verifyOtpFn_createServerFn_handler
};
