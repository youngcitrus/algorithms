function calcDroneMinEnergy(route) {
    // your code goes here
    
    let largest = route[0][2];
    for (let i = 1; i < route.length; i++) {
      largest = Math.max(largest, route[i][2]);
    }
    
    return largest - route[0][2];
}