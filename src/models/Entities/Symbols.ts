export const statuses = {
    open: {
        icon: 'checkmark',
        text: 'открыт',
        color: '#31cd31',
    },
    close: {
        icon: 'cancel',
        text: 'закрыт',
        color: 'red',
    },
}
export const getStatus = status => statuses[status];

