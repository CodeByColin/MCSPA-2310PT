const PPL = {
    Push: ["Bench Press 4S 8-10R", "Incline Dumbbell Press 3S 8-10R", "Lateral Raises 3S 10-12R","Tricep Dips 3S 8-10R","Skull Crushers 3S 8-10R"],
    Pull: ["Pull-ups 4S 8-10R","Barbell Rows 3S 8-10R","Lat Pulldowns 3S 8-10R","Seated Cable rows 3S 8-10R","Face Pulls 4S 10-12R","Barbell Bicep Curls 3S 8-10R","Hammer Curls 3S 8-10R"],
    Legs: ["Squats 4S 6-8R","Leg Press 3S 8-10R","Bulgarians 3S 10-12R","Leg Curls 3S 8-10R","Calf Raises 4S 10-12R"],
    Rest: ["Don't be lazy and do your active recovery!!!"],
    Push2: ["Bench Press 4S 8-10R", "Machine Cable Flys 3S 8-10R", "Seated Dumbbell Press 3S 10-12R","Tricep Pushdowns 3S 8-10R","Close Grip Bench Press 3S 8-10R"],
    Pull2: ["Pull-ups 4S 8-10R","T-Bar Rows 3S 8-10R","Lat Pulldowns 3S 8-10R","Seated Cable rows 3S 8-10R","Face Pulls 4S 10-12R","Hammer Curls 3S 10-12R","Preacher Curls 3S 8-10R"],
    Legs2: ["Squats 4S 6-8R","Hack Squat 3S 8-10R","Lunges 3S 10-12R","Leg Curls 3S 8-10R","HamString Curls 3S 8-10R","Calf Raises 4S 10-12R"]
}



function printWorkoutRoutine(workoutRoutine) {
    for (const day in workoutRoutine) {
      if (workoutRoutine.hasOwnProperty(day)) {
        console.log(`${day} Day:`);
        workoutRoutine[day].forEach((exercise) => {
          console.log(`  ${exercise}`);
        });
        console.log("");
      }
    }
  }
  
 
  printWorkoutRoutine(PPL);