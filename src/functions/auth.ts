import { createServerFn } from '@tanstack/react-start';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { sendEmail } from './email';

export const loginFn = createServerFn({ method: 'POST' })
  .validator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ email: data.email });

      if (!user) {
        throw new Error('Invalid credentials');
      }

      if (user.password !== data.password) {
        throw new Error('Invalid credentials');
      }

      const userId = user._id instanceof ObjectId ? user._id.toString() : user._id;
      const token = btoa(`${userId}:${Date.now()}`);

      return { 
        user: { 
          id: userId, 
          email: user.email, 
          name: user.name, 
          role: user.role || (user.email.toLowerCase().startsWith('admin@') ? 'admin' : 'user')
        }, 
        token 
      };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  });

export const registerFn = createServerFn({ method: 'POST' })
  .validator((data: { email: string; password: string; name: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const existingUser = await db.collection('users').findOne({ email: data.email });
      
      if (existingUser) {
        throw new Error('User already exists');
      }

      const isAdmin = data.email.toLowerCase().startsWith('admin@') || data.email.toLowerCase() === 'admin@fastcomputers.com';
      const user = {
        email: data.email,
        password: data.password,
        name: data.name,
        role: isAdmin ? 'admin' : 'user',
        createdAt: new Date(),
        cart: [],
        wishlist: [],
      };

      const result = await db.collection('users').insertOne(user);

      const userId = result.insertedId instanceof ObjectId ? result.insertedId.toString() : result.insertedId;
      const token = btoa(`${userId}:${Date.now()}`);

      return {
        user: { id: userId, email: user.email, name: user.name, role: user.role },
        token,
      };
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  });

export const getCartFn = createServerFn({ method: 'GET' })
  .validator((data: { userId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ _id: new ObjectId(data.userId) });

      if (!user) {
        throw new Error('User not found');
      }

      return { cart: user.cart || [] };
    } catch (error) {
      console.error('Get cart error:', error);
      throw error;
    }
  });

export const addToCartFn = createServerFn({ method: 'POST' })
  .validator((data: { userId: string; productId: string; quantity: number }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ _id: new ObjectId(data.userId) });

      if (!user) {
        throw new Error('User not found');
      }

      const cart = user.cart || [];
      const existingItem = cart.find((item: any) => item.productId === data.productId);

      if (existingItem) {
        existingItem.quantity += data.quantity;
      } else {
        cart.push({ productId: data.productId, quantity: data.quantity, addedAt: new Date() });
      }

      await db.collection('users').updateOne(
        { _id: new ObjectId(data.userId) },
        { $set: { cart } }
      );

      return { cart };
    } catch (error) {
      console.error('Add to cart error:', error);
      throw error;
    }
  });

export const removeFromCartFn = createServerFn({ method: 'POST' })
  .validator((data: { userId: string; productId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ _id: new ObjectId(data.userId) });

      if (!user) {
        throw new Error('User not found');
      }

      const cart = (user.cart || []).filter((item: any) => item.productId !== data.productId);

      await db.collection('users').updateOne(
        { _id: new ObjectId(data.userId) },
        { $set: { cart } }
      );

      return { cart };
    } catch (error) {
      console.error('Remove from cart error:', error);
      throw error;
    }
  });

export const updateCartQuantityFn = createServerFn({ method: 'POST' })
  .validator((data: { userId: string; productId: string; quantity: number }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ _id: new ObjectId(data.userId) });

      if (!user) {
        throw new Error('User not found');
      }

      const cart = user.cart || [];
      const item = cart.find((item: any) => item.productId === data.productId);

      if (item) {
        item.quantity = data.quantity;
      }

      await db.collection('users').updateOne(
        { _id: new ObjectId(data.userId) },
        { $set: { cart } }
      );

      return { cart };
    } catch (error) {
      console.error('Update cart quantity error:', error);
      throw error;
    }
  });

export const getWishlistFn = createServerFn({ method: 'GET' })
  .validator((data: { userId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ _id: new ObjectId(data.userId) });

      if (!user) {
        throw new Error('User not found');
      }

      return { wishlist: user.wishlist || [] };
    } catch (error) {
      console.error('Get wishlist error:', error);
      throw error;
    }
  });

export const addToWishlistFn = createServerFn({ method: 'POST' })
  .validator((data: { userId: string; productId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ _id: new ObjectId(data.userId) });

      if (!user) {
        throw new Error('User not found');
      }

      const wishlist: string[] = user.wishlist || [];
      if (!wishlist.includes(data.productId)) {
        wishlist.push(data.productId);
      }

      await db.collection('users').updateOne(
        { _id: new ObjectId(data.userId) },
        { $set: { wishlist } }
      );

      return { wishlist };
    } catch (error) {
      console.error('Add to wishlist error:', error);
      throw error;
    }
  });

export const removeFromWishlistFn = createServerFn({ method: 'POST' })
  .validator((data: { userId: string; productId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ _id: new ObjectId(data.userId) });

      if (!user) {
        throw new Error('User not found');
      }

      const wishlist = (user.wishlist || []).filter((id: string) => id !== data.productId);

      await db.collection('users').updateOne(
        { _id: new ObjectId(data.userId) },
        { $set: { wishlist } }
      );

      return { wishlist };
    } catch (error) {
      console.error('Remove from wishlist error:', error);
      throw error;
    }
  });

export const getProductsFn = createServerFn({ method: 'GET' })
  .validator((data: { category?: string; search?: string; limit?: number; skip?: number }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const query: Record<string, unknown> = {};
      
      if (data.category) query.cat = data.category;
      if (data.search) {
        query.$or = [
          { name: { $regex: data.search, $options: 'i' } },
          { brand: { $regex: data.search, $options: 'i' } },
          { cat: { $regex: data.search, $options: 'i' } },
        ];
      }

      const products = await db
        .collection('products')
        .find(query)
        .limit(data.limit || 50)
        .skip(data.skip || 0)
        .toArray();

      const total = await db.collection('products').countDocuments(query);

      const serializedProducts = products.map((product: any) => ({
        ...product,
        _id: product._id instanceof ObjectId ? product._id.toString() : product._id
      }));

      return { products: serializedProducts, total };
    } catch (error) {
      console.error('Get products error:', error);
      throw error;
    }
  });

export const getProductFn = createServerFn({ method: 'GET' })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const product = await db.collection('products').findOne({ id: data.id });

      if (!product) {
        throw new Error('Product not found');
      }

      const serializedProduct = {
        ...product,
        _id: product._id instanceof ObjectId ? product._id.toString() : product._id
      };

      return { product: serializedProduct };
    } catch (error) {
      console.error('Get product error:', error);
      throw error;
    }
  });

export const getProductsByIdsFn = createServerFn({ method: 'POST' })
  .validator((data: { ids: string[] }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();

      // Separate valid ObjectIds from customId strings
      const objectIdList: ObjectId[] = [];
      const customIdList: string[] = [];

      for (const id of data.ids) {
        if (/^[0-9a-fA-F]{24}$/.test(id)) {
          objectIdList.push(new ObjectId(id));
        } else {
          customIdList.push(id);
        }
      }

      // Query by _id OR customId to cover both seeded and manually created products
      const query: any = { $or: [] };
      if (objectIdList.length > 0) query.$or.push({ _id: { $in: objectIdList } });
      if (customIdList.length > 0) query.$or.push({ customId: { $in: customIdList } });

      // If both lists empty, return nothing
      if (query.$or.length === 0) return { products: [] };

      const products = await db.collection('products').find(query).toArray();

      const serializedProducts = products.map((product: any) => {
        const _idStr = product._id instanceof ObjectId ? product._id.toString() : product._id;
        return {
          ...product,
          _id: _idStr,
          // Normalize: expose 'id' so productsMap lookup matches what cart stored
          id: product.customId || _idStr,
        };
      });

      return { products: serializedProducts };
    } catch (error) {
      console.error('Get products by IDs error:', error);
      throw error;
    }
  });

export const createOrderFn = createServerFn({ method: 'POST' })
  .validator((data: {
    userId?: string;
    items: Array<{ productId: string; name: string; price: number; quantity: number; img: string }>;
    total: number;
    shipping: number;
    tax: number;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    paymentMethod: string;
  }) => {
    if (!data.items || data.items.length === 0) {
      throw new Error('Cart cannot be empty');
    }
    if (!data.fullName || data.fullName.trim() === '') {
      throw new Error('Full name is required');
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error('Valid email is required');
    }
    if (!data.phone || data.phone.trim() === '') {
      throw new Error('Phone number is required');
    }
    if (!data.address || data.address.trim() === '') {
      throw new Error('Address is required');
    }
    if (!data.city || data.city.trim() === '') {
      throw new Error('City is required');
    }
    if (!data.postalCode || data.postalCode.trim() === '') {
      throw new Error('Postal code is required');
    }
    if (!data.paymentMethod || data.paymentMethod.trim() === '') {
      throw new Error('Payment method is required');
    }
    if (data.total <= 0) {
      throw new Error('Invalid total amount');
    }
    return data;
  })
  .handler(async ({ data }) => {
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
        status: 'pending',
        createdAt: new Date(),
        orderNumber: `FC-${Date.now().toString().slice(-8)}`,
      };

      const result = await db.collection('orders').insertOne(order);

      // Clear cart if user is logged in
      if (data.userId) {
        await db.collection('users').updateOne(
          { _id: new ObjectId(data.userId) },
          { $set: { cart: [] } }
        );
      }

      return { 
        success: true, 
        orderId: result.insertedId.toString(),
        orderNumber: order.orderNumber 
      };
    } catch (error) {
      console.error('Create order error:', error);
      throw error;
    }
  });

export const getOrdersFn = createServerFn({ method: 'GET' })
  .validator((data: { userId?: string; email?: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      
      // Fetch orders by userId OR email (to include guest orders that match the logged-in user's email)
      const query: Record<string, unknown> = {};
      
      if (data.userId) {
        query.$or = [
          { userId: data.userId },
          { email: data.email }
        ];
      } else if (data.email) {
        query.email = data.email;
      }

      const orders = await db
        .collection('orders')
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();

      const serializedOrders = orders.map((order: any) => ({
        ...order,
        _id: order._id instanceof ObjectId ? order._id.toString() : order._id
      }));

      return { orders: serializedOrders };
    } catch (error) {
      console.error('Get orders error:', error);
      throw error;
    }
  });

export const getAllOrdersFn = createServerFn({ method: 'GET' })
  .handler(async () => {
    try {
      const db = await connectToDatabase();
      
      const orders = await db
        .collection('orders')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      const serializedOrders = orders.map((order: any) => ({
        ...order,
        _id: order._id instanceof ObjectId ? order._id.toString() : order._id
      }));

      return { orders: serializedOrders };
    } catch (error) {
      console.error('Get all orders error:', error);
      throw error;
    }
  });

/* ── Delivery Email Template ── */
const generateDeliveryEmailHTML = (orderNumber: string, items: any[], userName: string, orderId: string) => {
  const itemsHtml = items.map((item: any) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #222;">
        <div style="font-weight: bold; color: #fbfbfb; font-size: 14px;">${item.name}</div>
        <div style="color: #71717a; font-size: 12px;">Qty: ${item.quantity}</div>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #222; text-align: right; font-weight: bold; color: #dc2626;">
        PKR ${item.price.toLocaleString()}
      </td>
    </tr>
  `).join('');

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
      <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa;">Hello <strong style="color: #fbfbfb;">${userName || 'Valued Customer'}</strong>,</p>
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

export const updateOrderStatusFn = createServerFn({ method: 'POST' })
  .validator((data: { orderId: string; status: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      
      const validStatuses = ['pending', 'shipped', 'delivered', 'cancelled'];
      if (!validStatuses.includes(data.status)) {
        throw new Error('Invalid status');
      }

      // Fetch the order before updating (to get email/items for delivery notification)
      const order = await db.collection('orders').findOne({ _id: new ObjectId(data.orderId) });
      if (!order) throw new Error('Order not found');

      const result = await db.collection('orders').updateOne(
        { _id: new ObjectId(data.orderId) },
        { $set: { status: data.status, updatedAt: new Date() } }
      );

      if (result.matchedCount === 0) {
        throw new Error('Order not found');
      }

      // Send delivery email when status becomes 'delivered'
      if (data.status === 'delivered' && order.email) {
        try {
          const htmlBody = generateDeliveryEmailHTML(
            order.orderNumber,
            order.items || [],
            order.fullName || '',
            data.orderId
          );
          await sendEmail({
            to: order.email,
            subject: `✅ Order Delivered: ${order.orderNumber} — Fast Computers`,
            htmlBody,
          });
        } catch (emailErr) {
          console.error('Delivery email send error (non-fatal):', emailErr);
        }
      }

      return { success: true };
    } catch (error) {
      console.error('Update order status error:', error);
      throw error;
    }
  });

/* ══════════════════════════════════════════════
   REVIEW FUNCTIONS
══════════════════════════════════════════════ */

export const submitReviewFn = createServerFn({ method: 'POST' })
  .validator((data: { userId: string; productId: string; rating: number; comment: string; orderId: string }) => {
    if (!data.userId) throw new Error('Must be logged in to submit a review');
    if (!data.productId) throw new Error('Product ID is required');
    if (!data.rating || data.rating < 1 || data.rating > 5) throw new Error('Rating must be between 1 and 5');
    if (!data.comment || data.comment.trim().length < 5) throw new Error('Review comment must be at least 5 characters');
    return data;
  })
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();

      // Verify user exists
      const user = await db.collection('users').findOne({ _id: new ObjectId(data.userId) });
      if (!user) throw new Error('User not found');

      // Verify the user has a delivered order containing this product
      const deliveredOrder = await db.collection('orders').findOne({
        $or: [{ userId: data.userId }, { email: user.email }],
        status: 'delivered',
        'items.productId': data.productId,
      });

      if (!deliveredOrder) {
        throw new Error('You can only review products you have purchased and received.');
      }

      // Check if user already reviewed this product
      const existingReview = await db.collection('reviews').findOne({
        userId: data.userId,
        productId: data.productId,
      });

      if (existingReview) {
        throw new Error('You have already reviewed this product.');
      }

      const review = {
        userId: data.userId,
        userName: user.name || 'Anonymous',
        userEmail: user.email,
        productId: data.productId,
        orderId: deliveredOrder._id.toString(),
        rating: Number(data.rating),
        comment: data.comment.trim(),
        createdAt: new Date(),
      };

      const result = await db.collection('reviews').insertOne(review);

      // Update product's average rating
      const allReviews = await db.collection('reviews').find({ productId: data.productId }).toArray();
      const avgRating = allReviews.reduce((sum: number, r: any) => sum + r.rating, 0) / allReviews.length;

      await db.collection('products').updateOne(
        { $or: [{ id: data.productId }, { customId: data.productId }] },
        { $set: { rating: Math.round(avgRating * 10) / 10, reviewCount: allReviews.length } }
      );

      return { success: true, reviewId: result.insertedId.toString() };
    } catch (error) {
      console.error('Submit review error:', error);
      throw error;
    }
  });

export const getReviewsFn = createServerFn({ method: 'GET' })
  .validator((data: { productId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();

      const reviews = await db.collection('reviews')
        .find({ productId: data.productId })
        .sort({ createdAt: -1 })
        .toArray();

      const serialized = reviews.map((r: any) => ({
        ...r,
        _id: r._id instanceof ObjectId ? r._id.toString() : r._id,
      }));

      const avgRating = serialized.length
        ? Math.round((serialized.reduce((s: number, r: any) => s + r.rating, 0) / serialized.length) * 10) / 10
        : 0;

      return { reviews: serialized, avgRating, total: serialized.length };
    } catch (error) {
      console.error('Get reviews error:', error);
      throw error;
    }
  });

export const getUserReviewedProductsFn = createServerFn({ method: 'GET' })
  .validator((data: { userId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const reviews = await db.collection('reviews').find({ userId: data.userId }).toArray();
      const productIds = reviews.map((r: any) => r.productId);
      return { reviewedProductIds: productIds };
    } catch (error) {
      console.error('Get user reviewed products error:', error);
      return { reviewedProductIds: [] };
    }
  });

export const getAllReviewsFn = createServerFn({ method: 'GET' })
  .handler(async () => {
    try {
      const db = await connectToDatabase();

      const reviews = await db.collection('reviews')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      // Fetch product names for each review
      const productIds = [...new Set(reviews.map((r: any) => r.productId))];
      const products = await db.collection('products').find({
        $or: [
          { id: { $in: productIds } },
          { customId: { $in: productIds } },
        ]
      }).toArray();

      const productMap: Record<string, string> = {};
      products.forEach((p: any) => {
        const pId = p.id || p.customId || p._id.toString();
        productMap[pId] = p.name;
      });

      const serialized = reviews.map((r: any) => ({
        ...r,
        _id: r._id instanceof ObjectId ? r._id.toString() : r._id,
        productName: productMap[r.productId] || r.productId,
      }));

      return { reviews: serialized };
    } catch (error) {
      console.error('Get all reviews error:', error);
      throw error;
    }
  });

export const deleteReviewFn = createServerFn({ method: 'POST' })
  .validator((data: { reviewId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();

      const review = await db.collection('reviews').findOne({ _id: new ObjectId(data.reviewId) });
      if (!review) throw new Error('Review not found');

      await db.collection('reviews').deleteOne({ _id: new ObjectId(data.reviewId) });

      // Recalculate product rating after deletion
      const remaining = await db.collection('reviews').find({ productId: review.productId }).toArray();
      const newAvg = remaining.length
        ? Math.round((remaining.reduce((s: number, r: any) => s + r.rating, 0) / remaining.length) * 10) / 10
        : 0;

      await db.collection('products').updateOne(
        { $or: [{ id: review.productId }, { customId: review.productId }] },
        { $set: { rating: newAvg, reviewCount: remaining.length } }
      );

      return { success: true };
    } catch (error) {
      console.error('Delete review error:', error);
      throw error;
    }
  });

/* ── Forgot Password Email Template ── */
const generateResetEmailHTML = (otp: string, name: string) => {
  return `
    <div style="background-color: #0b0b0c; color: #fbfbfb; font-family: 'Rajdhani', 'Inter', sans-serif; padding: 40px; border: 1px solid #38383a; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 30px;">
        <span style="font-size: 28px; font-weight: bold; letter-spacing: 0.1em;">F<span style="color: #dc2626;">/</span>AST</span>
        <span style="font-size: 11px; text-transform: uppercase; color: #a1a1aa; border-left: 1px solid #38383a; padding-left: 12px; margin-left: 8px; letter-spacing: 0.3em;">COMPUTERS</span>
      </div>
      <h2 style="font-family: 'Oswald', sans-serif; font-size: 24px; text-transform: uppercase; border-bottom: 2px solid #dc2626; padding-bottom: 10px; color: #fbfbfb;">Password Recovery</h2>
      <p style="font-size: 16px; line-height: 1.6; color: #a1a1aa;">Hello ${name || 'User'},</p>
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

/* ── Send Reset Password OTP ── */
export const sendResetOtpFn = createServerFn({ method: 'POST' })
  .validator((data: { email: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ email: data.email });

      if (!user) {
        throw new Error('Email address not registered');
      }

      // Generate 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

      // Save OTP to user document
      await db.collection('users').updateOne(
        { _id: user._id },
        {
          $set: {
            resetOtp: otp,
            resetOtpExpires: expires,
          }
        }
      );

      // Send Email
      const htmlBody = generateResetEmailHTML(otp, user.name);
      const emailResult = await sendEmail({
        to: data.email,
        subject: `Reset Password Verification Code: ${otp}`,
        htmlBody,
      });

      if (!emailResult.success) {
        throw new Error(emailResult.error || 'Failed to send OTP email');
      }

      return { success: true };
    } catch (error) {
      console.error('Send reset OTP error:', error);
      throw error;
    }
  });

/* ── Verify OTP Only (Step 2 check) ── */
export const verifyOtpFn = createServerFn({ method: 'POST' })
  .validator((data: { email: string; otp: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ email: data.email });

      if (!user) {
        throw new Error('User not found');
      }

      if (!user.resetOtp || user.resetOtp !== data.otp) {
        throw new Error('Invalid verification code');
      }

      if (!user.resetOtpExpires || new Date(user.resetOtpExpires) < new Date()) {
        throw new Error('Verification code has expired. Please request a new one.');
      }

      return { success: true };
    } catch (error) {
      console.error('Verify OTP error:', error);
      throw error;
    }
  });

/* ── Verify OTP and Reset Password ── */
export const verifyOtpAndResetPasswordFn = createServerFn({ method: 'POST' })
  .validator((data: { email: string; otp: string; newPassword: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const user = await db.collection('users').findOne({ email: data.email });

      if (!user) {
        throw new Error('User not found');
      }

      if (!user.resetOtp || user.resetOtp !== data.otp) {
        throw new Error('Invalid verification code');
      }

      if (!user.resetOtpExpires || new Date(user.resetOtpExpires) < new Date()) {
        throw new Error('Verification code has expired');
      }

      // Update password and clear OTP
      await db.collection('users').updateOne(
        { _id: user._id },
        {
          $set: { password: data.newPassword },
          $unset: { resetOtp: "", resetOtpExpires: "" }
        }
      );

      return { success: true };
    } catch (error) {
      console.error('Verify OTP and reset password error:', error);
      throw error;
    }
  });

