class Todo  {
    id:string;
    title:string;

    constructor(todoText:string){
        this.id = new Date().toISOString();
        this.title = todoText;
    }


}



export default Todo;