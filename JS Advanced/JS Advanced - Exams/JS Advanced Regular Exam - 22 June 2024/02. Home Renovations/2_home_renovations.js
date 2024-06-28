class HomeRenovation {
  constructor(budget) {
    this.budget = budget;
    this.tasks = [];
    this.completedTasks = [];
  }
  addTask(description, cost, priority) {
    if (this.budget < cost) {
      return `Not enough budget to add '${description}' task.`;
    }
    this.budget -= cost;
    this.tasks.push({ description, cost, priority });
    return `The task '${description}' has been successfully added to the renovation plan.`;
  }
  markTaskAsCompleted(description) {
    const foundTask = this.tasks.find((t) => t.description === description);
    if (!foundTask) {
      throw new Error(`Task '${description}' not found in the renovation plan.`);
    }
    this.completedTasks.push(foundTask);
    this.tasks = this.tasks.filter((t) => t.description !== description);
    return `The task '${description}' has been successfully completed.`;
  }
  getPriorityTasksCount(minimalPriority) {
    if (minimalPriority <= 0) {
      return "The priority cannot be zero or negative.";
    }
    const tasksCount = this.tasks.filter(
      (t) => t.priority >= minimalPriority
    ).length;
    if (tasksCount === 0) {
      return `No tasks found with priority ${minimalPriority} or higher.`;
    }
    return `You have ${tasksCount} tasks to prioritize.`;
  }
  renovationSummary() {
    if (this.completedTasks.length === 0) {
      throw new Error("No tasks have been completed yet!");
    }
    const output = [
      `Budget left $${this.budget}.`,
      `You have completed ${this.completedTasks.length} tasks.`,
      `Pending tasks in the renovation plan:`,
    ];
    this.tasks.forEach((t) => {
      output.push(
        `${t.description} - Cost: ${t.cost}, Priority: ${t.priority}`
      );
    });
    return output.join("\n");
  }
}

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.addTask("New Roof", 5000, 1));

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.markTaskAsCompleted("Paint walls"));
// console.log(renovation.markTaskAsCompleted("Change doors"));

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.markTaskAsCompleted("Paint walls"));
// console.log(renovation.getPriorityTasksCount(1));

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2));
// console.log(renovation.addTask("Install new windows", 5000, 1));
// console.log(renovation.markTaskAsCompleted("Paint walls"));
// console.log(renovation.renovationSummary());