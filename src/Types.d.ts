

//the types only work with values and add limitations to the code, normaly
//its be used with static values, like the ones in the example above
export type weather = 'sunny' | 'rainy' | 'cloudy' | 'windy'| 'stormy';

export type visibility = 'good' | 'bad' | 'foggy' | 'hazy';



// a interface to define the structure of the travel object and can by extended 
// its better to use interfaces when you want to define a object structure but not the values
export interface DiaryEntry {
    id: number;
    date: string;
    weather: weather;
    visibility: visibility;
    comments?: string;
}

export interface SuperDiaryEntry extends DiaryEntry {
    flightNumber: number;
}

//the names of types or interfaces cannot be the same names