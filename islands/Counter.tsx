/** @jsx h */
import { h, IS_BROWSER, StateUpdater, useState } from "$fresh/runtime.ts";

interface CounterProps {
	start: number;
}

export default function Counter(props: CounterProps): h.JSX.Element {
	const [count, setCount]: [number, StateUpdater<number>] = useState(
		props.start,
	);

	return (
		<div>
			<p>{count}</p>
			<button
				onClick={(): void => setCount(count - 1)}
				disabled={!IS_BROWSER}
				style="cursor: pointer;"
			>
				-1
			</button>
			<button
				onClick={(): void => setCount(count + 1)}
				disabled={!IS_BROWSER}
				style="cursor: pointer;"
			>
				+1
			</button>
		</div>
	);
}
