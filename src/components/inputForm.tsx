import { ChangeEvent, useRef, useState } from "react";
import { addDatatoTable, IblogData } from "../services/DBService";

export interface IInputFormProps {
}

export function InputForm (props: IInputFormProps) {
	const nameInputF = useRef<HTMLInputElement>(null);
	const textInputF = useRef<HTMLInputElement>(null);

	const sendData = () => {
		if(!nameInputF.current || !textInputF.current) 
			return

		let data: IblogData = {
			name: nameInputF.current.value,
			text: textInputF.current.value
		}

		addDatatoTable(data);
		
		nameInputF.current.value = "";
		textInputF.current.value = "";
	}

	return (
		<div>
			<label>
				Name
				<input id="name" type="text" ref={nameInputF} />
			</label>
			<br/>
			<label>
				Text
				<input id="name" type="text" ref={textInputF} />
			</label>
			<br/>

			<button onClick={sendData}>Send</button>
		</div>
	);
}
