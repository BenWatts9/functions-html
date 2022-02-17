const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const makeForInternet = (compObj) => {
    return (`   <section id="computer--${compObj.id}>
        <h1>${compObj.manufacturer} ${compObj.make}</h1>
        <div>Model: ${compObj.model}</div>
        <div>Memory: ${compObj.specs.memory} GB</div>
        <div>Hard Drive Space: ${compObj.specs.hardDrive}</div>
        <div>Processor speed: ${compObj.specs.processor} Ghz</div>
    </section>`)
}

const newComp = computer

console.log(makeForInternet(newComp))