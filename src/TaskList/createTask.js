import uniqid from 'uniqid';

const createTask = (id, description, dueDate, isCompleted, tags) => {
    this.id = uniqid();
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
    this.tags = tags;

    return {id, description, dueDate, isCompleted, tags};
}

export default createTask;