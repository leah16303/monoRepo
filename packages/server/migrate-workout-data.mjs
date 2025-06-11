// migrate-workout-data.mjs
import mongoose from 'mongoose';

// Define the schema directly in the migration script
const WorkoutEntrySchema = new mongoose.Schema({
  day: { type: String }, // Old field
  date: { type: Date },  // New field
  activity: { type: String, required: true },
  duration: { type: String, required: true }
});

const WorkoutWeekSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  entries: {
    type: [WorkoutEntrySchema],
    required: true
  }
});

const WorkoutWeekModel = mongoose.model("WorkoutWeek", WorkoutWeekSchema);

async function migrateData() {
  try {
    // Use the same database name as your server
    await mongoose.connect('mongodb://localhost:27017/healthdb');
    
    console.log('Connected to MongoDB (healthdb)');
    
    // Find all workout weeks
    const workoutWeeks = await WorkoutWeekModel.find({});
    console.log(`Found ${workoutWeeks.length} workout weeks to process`);
    
    let updatedCount = 0;
    
    for (const doc of workoutWeeks) {
      let hasChanges = false;
      
      if (doc.entries && doc.entries.length > 0) {
        doc.entries.forEach(entry => {
          if (entry.day && !entry.date) {
            console.log(`Converting "${entry.day}" to date for user ${doc.userid}`);
            
            const dayMap = {
              'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
              'Thursday': 4, 'Friday': 5, 'Saturday': 6
            };
            
            const today = new Date();
            const currentWeekStart = new Date(today);
            currentWeekStart.setDate(today.getDate() - today.getDay());
            currentWeekStart.setHours(0, 0, 0, 0);
            
            const targetDate = new Date(currentWeekStart);
            targetDate.setDate(currentWeekStart.getDate() + (dayMap[entry.day] || 0));
            
            entry.date = targetDate;
            entry.day = undefined; // Remove the old field
            hasChanges = true;
          }
        });
        
        if (hasChanges) {
          await doc.save();
          updatedCount++;
          console.log(`Updated workout week for user: ${doc.userid}`);
        }
      }
    }
    
    console.log(`Migration completed successfully. Updated ${updatedCount} documents.`);
    
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

migrateData();