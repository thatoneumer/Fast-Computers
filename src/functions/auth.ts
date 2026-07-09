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

export const updateOrderStatusFn = createServerFn({ method: 'POST' })
  .validator((data: { orderId: string; status: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      
      const validStatuses = ['pending', 'shipped', 'delivered', 'cancelled'];
      if (!validStatuses.includes(data.status)) {
        throw new Error('Invalid status');
      }

      const result = await db.collection('orders').updateOne(
        { _id: new ObjectId(data.orderId) },
        { $set: { status: data.status } }
      );

      if (result.matchedCount === 0) {
        throw new Error('Order not found');
      }

      return { success: true };
    } catch (error) {
      console.error('Update order status error:', error);
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

