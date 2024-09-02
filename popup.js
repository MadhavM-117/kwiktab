const button = document.querySelector("button");
const content = document.querySelector("#content");

button.addEventListener("click", async () => {

	const tabs = await browser.tabs.query({});

	console.log(tabs);

});
