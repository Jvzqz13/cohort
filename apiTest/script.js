const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '676a3e42b9msh5903d76e742310bp17d918jsn401d1aad3a3d',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};


async function f() {

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const json = result;
        const obj = JSON.parse(json)
        console.log(obj);
        const setup = obj.body[0].setup;
        const punchline = obj.body[0].punchline;

        console.log(` Setup: ${setup}`);
        console.log(`Punchline: ${punchline}`);

        document.getElementById('setup').innerHTML = setup;
        document.getElementById('punchline').innerHTML = punchline;
        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}

f();
