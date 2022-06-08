import { writable } from 'svelte/store';
import axios from '../../utils/axios';

export default class Service {
	constructor() {
		this._http = axios(true);
		this.state = writable({
			isFetching: false,
			isSuccess: false,
			isError: false,
			result: null
		});
	}

	reset() {
		this.state.update(() => ({
			isFetching: false,
			isSuccess: false,
			isError: false,
			result: null
		}));
	}

	setState(key, value) {
		this.state.update((prev) => ({
			...prev,
			[key]: value
		}));
	}
}
