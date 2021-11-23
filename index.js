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
	new Fact('매일 내가 이슈 하나씩을 만들게.', '조문기')
];

window.onload = () => {
	let factElem = document.querySelector('.fact');
	let nameElem = document.querySelector('.name');
	let fact = facts[Math.floor(facts.length * Math.random())];

	factElem.innerHTML = fact.content;
	nameElem.innerHTML = fact.name;
}