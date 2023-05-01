import { writable } from 'svelte/store'
import type {Player} from '../type/Player'

// const Hoge = {name:"hoge"} as Player;
export const Hoge = writable<Player>({name:"hoge"});

