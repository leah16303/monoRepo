// check-data.mjs
import mongoose from 'mongoose';

async function checkData() {
  try {
    // Use the same database name as your server
    await mongoose.connect('mongodb://localhost:27017/healthdb');
    
    console.log('Connected to MongoDB (healthdb)');
    
    // List all collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    // Check for workout-related collections with different possible names
    const possibleNames = ['workoutweeks', 'WorkoutWeeks', 'workoutWeeks', 'workout_weeks'];
    
    for (const name of possibleNames) {
      try {
        const count = await mongoose.connection.db.collection(name).countDocuments();
        if (count > 0) {
          console.log(`\nFound ${count} documents in collection: ${name}`);
          
          // Show a sample document
          const sample = await mongoose.connection.db.collection(name).findOne();
          console.log('Sample document:', JSON.stringify(sample, null, 2));
        }
      } catch (err) {
        // Collection doesn't exist, that's okay
      }
    }
    
    // Also check for individual workout entries
    const entryNames = ['workoutentryschemas', 'WorkoutEntrySchema', 'entries', 'workoutentries'];
    
    for (const name of entryNames) {
      try {
        const count = await mongoose.connection.db.collection(name).countDocuments();
        if (count > 0) {
          console.log(`\nFound ${count} documents in collection: ${name}`);
          
          // Show a sample document
          const sample = await mongoose.connection.db.collection(name).findOne();
          console.log('Sample document:', JSON.stringify(sample, null, 2));
        }
      } catch (err) {
        // Collection doesn't exist, that's okay
      }
    }
    
  } catch (error) {
    console.error('Check failed:', error);
  } finally {
    await mongoose.disconnect();
  }
}

checkData();