class Fact {
	constructor(content, name) {
		this.content = content;
		this.name = name;
	}
}

const facts = [
	new Fact('CPU가 연산이 제일 빠르다.', '조문기'),
	new Fact('서돈해 아직 퇴근 안함.', '서동해'),
	new Fact('필수 CS 지식은 DS DB 알고리즘 OS이다.', '조문기'),
	new Fact('매일 내가 이슈 하나씩을 만들게.', '조문기'),
	new Fact('모두가 컴퓨터로 먹고살게 되겠지. 결국에는.', '서동해')
];

let factElem, nameElem;
let init = () => {
	let fact = facts[Math.floor(facts.length * Math.random())];
	factElem.innerHTML = fact.content;
	nameElem.innerHTML = fact.name;
}

window.onload = () => {
	factElem = document.querySelector('.fact');
	nameElem = document.querySelector('.name');

	init();
}
