export const addFeature = (newFeature) => {
    console.log('function running')
    return {type: 'ADD_FEATURE', payload: newFeature}
}

export const removeFeature = (remFeature) => {
    console.log('removed')
    return {type: 'REMOVE_FEATURE', payload: remFeature}
}