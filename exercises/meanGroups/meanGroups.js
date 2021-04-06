// You are given an array of arrays a. Your task is to group the arrays a[i] by their mean values,
// so that arrays with equal mean values are in the same group, and arrays with different mean values are in different groups.

// Each group should contain a set of indices (i, j, etc), such that the corresponding arrays (a[i], a[j], etc) all have the same mean.
// Return the set of groups as an array of arrays, where the indices within each group are sorted in ascending order,
// and the groups are sorted in ascending order of their minimum element.

function meanGroups(a) {

  const dictGrouping = {}

  a.forEach((current, index) => {
    //Calculate mean
    const mean = current.reduce((prev, current) => prev + current) / current.length

    if (mean in dictGrouping) {
      dictGrouping[mean] = [...dictGrouping[mean], index]
    } else {
      dictGrouping[mean] = [index]
    }
  })

  return Object.values(dictGrouping).sort((a, b) => a[0] - b[0]);
}
