export default class Question extends FollowUp {
    constructor(text, answers = []) {
        super(text);
        this.answers = answers;
    }
}
