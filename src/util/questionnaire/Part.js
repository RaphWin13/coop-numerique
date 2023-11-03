export default class Part {
    constructor(text, answers = []) {
        this.id = crypto.randomUUID()
        this.text = text;
        this.answers = answers;
    }
}
