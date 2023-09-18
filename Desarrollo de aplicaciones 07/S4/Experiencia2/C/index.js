console.log(variableNoAsignada);
console.log(variableNoDeclarada);

function exterior() {
    const variableExterior = "Exterior";
    function interior() {
        const variableInterior = "Interior";
        console.log(variableExterior);
        console.log(variableInterior);
    }
    interior();
}
exterior();
