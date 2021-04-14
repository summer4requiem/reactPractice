let initialState = {
    dialogs: [{
        id: 1,
        name: 'Andrew'
    },
    {
        id: 2,
        name: 'Mich'
    },
    {
        id: 3,
        name: 'sana'
    },
    {
        id: 4,
        name: 'Mich'
    },
    {
        id: 5,
        name: 'Hayrick'
    },
    {
        id: 6,
        name: 'Seta'
    }
    ] as Array<DialogType>,
}

type DialogType = {
    id: number,
    name: string,
}

type initialState = {
    dialogs: Array<DialogType>
}

const sidebarReducer = (state = initialState): initialState => {
    return state;
}

export default sidebarReducer;