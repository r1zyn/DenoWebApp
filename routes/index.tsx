/** @jsx h */
import { h } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home(): h.JSX.Element {
	return (
		<div>
			<img
				src="/logo.svg"
				height="100px"
				alt="the fresh logo: a sliced lemon dripping with juice"
			/>
			<p style="font-family: Arial">
				Welcome to `fresh`. Try update this message in the
				./routes/index.tsx file, and refresh.
			</p>
			<Counter start={3} />
		</div>
	);
}
