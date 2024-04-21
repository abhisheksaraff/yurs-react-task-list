import uniqid from 'uniqid';

const createTask = (description, dueDate, isCompleted, tags) => {
    
    return {id: uniqid(), description, dueDate, isCompleted, tags};
}

export default createTask;