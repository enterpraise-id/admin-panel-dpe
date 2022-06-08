import Service from './service';

export default class ProductService extends Service {
	async pagination(
		options = {
			page: 1,
			perPage: 10
		}
	) {
		this.reset();
		this.setState('isFetching', true);

		const q = new URLSearchParams();
		q.set('page', options.page);
		q.set('perPage', options.perPage);
		
		await this._http
			.get('/category?' + q.toString())
			.then((res) => res.data)
			.then((data) => {
				this.setState('isSuccess', true);
				this.setState('data', data);
			})
			.catch((error) => {
				console.error(error);
				this.setState('isError', true);
			})
			.finally(() => {
				this.setState('isFetching', false);
			});

		return this.state;
	}

	async findById(id) {
		this.reset();
		this.setState('isFetching', true);
		await this._http
			.get('/category/' + id)
			.then((res) => res.data)
			.then((data) => {
				this.setState('isSuccess', true);
				this.setState('data', data);
			})
			.catch((error) => {
				console.error(error);
				this.setState('isError', true);
			})
			.finally(() => {
				this.setState('isFetching', false);
			});

		return this.state;
	}

	async store(data) {
		this.reset();
		this.setState('isFetching', true);
		await this._http
			.post('/category', data)
			.then((res) => res.data)
			.then((data) => {
				this.setState('isSuccess', true);
				this.setState('data', data);
			})
			.catch((error) => {
				console.error(error);
				this.setState('isError', true);
			})
			.finally(() => {
				this.setState('isFetching', false);
			});

		return this.state;
	}

	async update(id, data) {
		this.reset();
		this.setState('isFetching', true);
		await this._http
			.put('/category/' + id, data)
			.then((res) => res.data)
			.then((data) => {
				this.setState('isSuccess', true);
				this.setState('data', data);
			})
			.catch((error) => {
				console.error(error);
				this.setState('isError', true);
			})
			.finally(() => {
				this.setState('isFetching', false);
			});

		return this.state;
	}

	async delete(id) {
		this.reset();
		this.setState('isFetching', true);
		await this._http
			.delete('/category/' + id)
			.then((res) => res.data)
			.then((data) => {
				this.setState('isSuccess', true);
				this.setState('data', data);
			})
			.catch((error) => {
				console.error(error);
				this.setState('isError', true);
			})
			.finally(() => {
				this.setState('isFetching', false);
			});

		return this.state;
	}
}
