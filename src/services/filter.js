import { stringInclues } from "../util/common";
export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

export function applyFilter(list, filter) {
    switch (filter) {
        case 'completed':
            return list.filter(item => item.completed === true);
        case 'active':
            return list.filter(item => item.completed !== true);
        default:
            return list;
    }
}

export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    };
}

export function search(list, query) {
    let q = query.trim().toLowerCase();

    return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
}