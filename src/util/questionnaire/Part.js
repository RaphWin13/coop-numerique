export default class Part {
    constructor(text, answers = [], isRecuperation = false, isReparation = false) {
        this.id = crypto.randomUUID()
        this.text = text;
        this.answers = answers;
        this.isRecuperation = isRecuperation;
        this.isReparation = isReparation;
    }
}
