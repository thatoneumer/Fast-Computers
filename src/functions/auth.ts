import { createServerFn } from '@tanstack/react-start';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

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
