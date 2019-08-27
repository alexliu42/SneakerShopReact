import React, { Component } from "react";
import Counter from "./counter";
import './counter.css';

class Counters extends Component {

	state ={

			counters: [
			{id: 1, value: 0, name:'Nike-Kyrie-5-Spongebob' ,imageLoc: 'https://stockx-360.imgix.net/Nike-Kyrie-5-Spongebob/Images/Nike-Kyrie-5-Spongebob/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1564168668&w=400'
			,tags: ['USD 130','Opti Yellow/Opti Yellow','2019/08/10']},
			{id: 2, value: 0, name:'Nike-Kyrie-5-Spongebob-Squidward', imageLoc: 'https://stockx-360.imgix.net/Nike-Kyrie-5-Spongebob-Squidward/Images/Nike-Kyrie-5-Spongebob-Squidward/Lv2/img03.jpg?auto=format,compress&q=90&updated_at=1565638888&w=400'
			,tags: ['USD 130','Frosted Spruce/Aluminum','2019/08/10']},
			{id: 3, value: 0, name:'Nike-Kyrie-5-Spongebob-Patrick', imageLoc: 'https://stockx-360.imgix.net/Nike-Kyrie-5-Spongebob-Patrick/Images/Nike-Kyrie-5-Spongebob-Patrick/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1565638999&w=400'
			,tags: ['USD 130','Lotus Pink/University Red','2019/08/10']},
			{id: 4, value: 0, name:'Nike-Kyrie-2-Low-SpongeBob-Mr-Krabs', imageLoc: 'https://stockx-360.imgix.net/Nike-Kyrie-2-Low-SpongeBob-Mr-Krabs/Images/Nike-Kyrie-2-Low-SpongeBob-Mr-Krabs/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1565643243&w=400'
			,tags: ['USD 130','University Red/Metallic Gold','2019/08/10']},
			{id: 5, value: 0, name:'Nike-Kyrie-2-Low-SpongeBob-Sandy-Cheeks', imageLoc: 'https://stockx-360.imgix.net/Nike-Kyrie-2-Low-SpongeBob-Sandy-Cheeks/Images/Nike-Kyrie-2-Low-SpongeBob-Sandy-Cheeks/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1565643290&w=400'
			,tags: ['USD 130','White/Wolf Grey','2019/08/10']},
		],	
	}

	componentDidMount(){
		fetch('/record')
		.then(res=> res.json())

	}

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter};
		counters[index].value++;
		this.setState({counters});		
	}

	handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter};
			if (counters[index].value === 0){
			
			}
			else{
				counters[index].value--;
			}
		this.setState({counters});		
		
	}

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c =>c.id !==counterId)
		this.setState({ counters })
	}

	handleReset = () => {
		const counters = this.state.counters.map(c =>{
			c.value = 0;
			return c;
		})
		this.setState({ counters })
	}

	render() {
		return (
			<div>
				<form action="record" method="POST">
					<input type="text" name="name" size = "6" placeholder="Name"/>
					<input type="text" name="size" size = "4" placeholder="Size"/>
					<input type="text" name="phonenumber" size = "12" placeholder="Phone Number"/>
					<input type="hidden" name="shoes1" value="Nike-Kyrie-5-Spongebob"/>
					<input type="hidden" name="shoes1quantity" value={this.state.counters[0].value} onChange={this.handleIncrement}/>
					<input type="hidden" name="shoes2" value="Nike-Kyrie-5-Spongebob-Squidward"/>				
					<input type="hidden" name="shoes2quantity" value={this.state.counters[1].value} onChange={this.handleIncrement}/>
					<input type="hidden" name="shoes3" value="Nike-Kyrie-5-Spongebob-Patrick"/>
					<input type="hidden" name="shoes3quantity" value={this.state.counters[2].value} onChange={this.handleIncrement}/>
					<input type="hidden" name="shoes4" value="Nike-Kyrie-2-Low-SpongeBob-Mr-Krabs"/>
					<input type="hidden" name="shoes4quantity" value={this.state.counters[3].value} onChange={this.handleIncrement}/>
					<input type="hidden" name="shoes5" value="Nike-Kyrie-2-Low-SpongeBob-Sandy-Cheeks"/>
					<input type="hidden" name="shoes5quantity" value={this.state.counters[4].value} onChange={this.handleIncrement}/>

					<input type="submit" value="Submit"/>

				</form>

				<button 
					onClick={this.handleReset}
					className="btn btn-primary btn-sm m-2"
						>
						 Reset
				</button>
				

				{this.state.counters.map(counter => (
					<Counter 
						key={counter.id} 
						onDelete={this.handleDelete} 
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						counter = {counter}
						image={counter.imageLoc}
						description = {counter.tags}>
						<h4>{counter.name}</h4>
					</Counter>
			))
		}
			</div>
			)
	}
}
export default Counters;
