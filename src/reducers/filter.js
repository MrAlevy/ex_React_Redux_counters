export const filter = (state='all', action) => {
    switch (action.type) {
        case 'ALL':
            return 'all'
        case 'FINISH':
            return 'finish'
        case 'NOT_FINISH':
            return 'notFinish'
        default: 
            return state
    }
} 