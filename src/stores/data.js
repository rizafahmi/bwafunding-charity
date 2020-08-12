import { writable } from 'svelte/store';

export const charities = writable([]);
export const charity = writable({});

export async function getCharities() {
    const res = await fetch("https://charity-api-bwa.herokuapp.com/charities");
    const data = await res.json();
    charities.set(data);

    if (res.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}

export async function getCharity(id) {
    const res = await fetch(
        `https://charity-api-bwa.herokuapp.com/charities/${id}`
    );
    const data = await res.json();
    charity.set(data);

    if (res.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}

getCharities();