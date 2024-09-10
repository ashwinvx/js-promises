// Task 1: Declare The Task Array and The Interval ID

const oneTimeTasks = [];
let monitoringTaskId;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
	oneTimeTasks.push({ function: func, delay: delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
	oneTimeTasks.forEach(obj => setTimeout(obj.function, obj.delay));
}

// Task 4: Start Monitoring Function
function startMonitoring() {
	monitoringTaskId = setInterval(() => {
		console.log('Monitoring conditions....');
		console.log('Oxygen levels -->', Math.random() > 0.2 ? 'stable' : 'critical');
		console.log('Communication network -->', Math.random() > 0.5 ? 'Good to go' : 'Error');
	}, 1000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
	clearInterval(monitoringTaskId);
	console.log('Monitoring ended');
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
	const intervalId = setInterval(() => {
		duration--;
		console.log(`T-minus ${duration} secs`);
		if (duration === 0) {
			console.log("Liftoff!");
			clearInterval(intervalId);
		}
	}, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
	startMonitoring();
	addOneTimeTask(stopMonitoring, 10000);
	addOneTimeTask(function () { startCountdown(10); }, 15000);
	runOneTimeTasks(); // Executes all scheduled one-time tasks.
}

scheduleMission(); // Starts the mission.