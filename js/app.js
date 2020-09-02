const form = document.getElementById("covidform")

form.addEventListener('submit', function(e) {
	e.preventDefault()

	var country = document.getElementById("country").value

	var url = "https://api.covid19api.com/total/dayone/country/" + country

	covidData(url)
})

async function covidData(url){
	let response = await fetch(url)
	console.log(response)
	let data = await response.json()
	console.log(data)

	let length = data.length

	let index = length - 1

	let confirmed = document.getElementById("rcase")
	let deaths = document.getElementById("dths")
	let recovered = document.getElementById("rpats")

	confirmed.innerHTML = ""
	deaths.innerHTML = ""
	recovered.innerHTML = ""

	confirmed.append(data[index].Confirmed)
	deaths.append(data[index].Deaths)
	recovered.append(data[index].Recovered)
}