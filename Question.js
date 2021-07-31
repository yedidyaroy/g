class Question{
    constructor(){
        this.title;
        this.input;
    }
    display(){
        this.title=createElement('h2');
        this.title.html("My quiz");
        this.title.position(550,20);
        
        this.input=createInput("Enter Correct Option");
        this.input.position(450,300);

        this.button = createButton("Submit");
        this.button.position(500,350)

        fill("BLACK");
        textSize(20);
        text("Question: Which is the largest planet in the solar system ?",100,100)

        fill("Black");
        textSize(20);
        text("1. Sun",100,150);
        text("2. Earth",100,180);
        text("3. Jupiter",100,210);
        text("4. Saturn",100,240);
    }
}