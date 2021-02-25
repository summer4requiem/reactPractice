export const changeObjectInArray = (items, itemId, objProp, newObjProps) => {
    items.map(u => {
        if (u[objProp] === itemId) {
            return {
                ...u,
                ...newObjProps
            };
        }
        return u;
    })
}