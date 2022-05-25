import { delDatatoTable, IblogData } from "../services/DBService";


export interface IBlogProps {
	blogData: IblogData;
}

export function Blog(props: IBlogProps) {
	const deleteThis = () => {
		if(!props.blogData.id)
			return;

		delDatatoTable(props.blogData.id);
	}

	return (
		<div>
			<b>{props.blogData.name}</b>
			<p>{props.blogData.text}</p>
			<button onClick={deleteThis}>Delete</button>
			<hr />
		</div>
	);
}
