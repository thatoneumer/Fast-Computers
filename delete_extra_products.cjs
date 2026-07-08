const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Manually parse .env file
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
envContent.split('\n').forEach(line => {
  const [key, ...val] = line.split('=');
  if (key && val.length) process.env[key.trim()] = val.join('=').trim();
});

const uri = process.env.mongoDB_URI;

async function deleteAllProducts() {
  if (!uri) {
    console.error('❌ mongoDB_URI not found in .env file!');
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ MongoDB se connect ho gaye!');

    const db = client.db('fastcomputers');
    const collection = db.collection('products');

    // Pehle total count dekho
    const totalCount = await collection.countDocuments();
    console.log(`📦 Database mein total products: ${totalCount}`);

    if (totalCount === 0) {
      console.log('ℹ️  Collection already empty hai!');
      return;
    }

    // Har category breakdown dikhao
    const categoryCounts = await collection.aggregate([
      { $group: { _id: '$cat', count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]).toArray();

    console.log('\n📊 Har category mein products:');
    categoryCounts.forEach(c => {
      console.log(`  ${c._id || '(no category)'}: ${c.count} products`);
    });

    console.log(`\n🗑️  Saare ${totalCount} products delete ho rahe hain...`);

    // Saare products delete karo
    const result = await collection.deleteMany({});
    
    console.log(`\n✅ Successfully ${result.deletedCount} products delete ho gaye!`);

    // Final count confirm karo
    const finalCount = await collection.countDocuments();
    console.log(`📦 Ab database mein total products: ${finalCount}`);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
    console.log('🔌 MongoDB connection close ho gaya.');
  }
}

deleteAllProducts();
