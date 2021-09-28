
Given(/^que eu acesso o site$/, () => {
	return true;
});

When(/^desejo realizar meu "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^informar os dados de "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
	
});

When(/^informar a "([^"]*)"$/, (args1) => {

	return true;
});

Then(/^devo obter o resultado "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});
