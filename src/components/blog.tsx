export interface IblogData {
	name: string;
	text: string;
}

export interface IBlogProps {
	blogData: IblogData;
}

export function Blog (props: IBlogProps) {
  return (
	<div>
	  <b>{props.blogData.name}</b>
	  <p>{props.blogData.text}</p>
	  <hr/>
	</div>
  );
}
